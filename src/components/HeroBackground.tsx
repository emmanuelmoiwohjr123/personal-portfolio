import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  connections: number[];
}

const HeroBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Create particles
    const particles: Particle[] = [];
    const numParticles = 80;
    const colors = ['#4F46E5', '#10B981', '#F59E0B'];

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1,
        vy: (Math.random() - 0.5) * 1,
        radius: Math.random() * 3 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        connections: [],
      });
    }

    // Animation
    let animationFrameId: number;
    let mouseX = 0;
    let mouseY = 0;

    canvas.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    });

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        // Add mouse interaction
        const dx = mouseX - particle.x;
        const dy = mouseY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 200) {
          particle.vx += (dx / distance) * 0.02;
          particle.vy += (dy / distance) * 0.02;
        }

        particle.x += particle.vx;
        particle.y += particle.vy;

        // Add friction
        particle.vx *= 0.99;
        particle.vy *= 0.99;

        // Bounce off edges
        if (particle.x < 0) { particle.x = 0; particle.vx *= -1; }
        if (particle.x > canvas.width) { particle.x = canvas.width; particle.vx *= -1; }
        if (particle.y < 0) { particle.y = 0; particle.vy *= -1; }
        if (particle.y > canvas.height) { particle.y = canvas.height; particle.vy *= -1; }

        // Draw particle with glow effect
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        // Add glow effect
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.radius * 2
        );
        gradient.addColorStop(0, particle.color.replace('rgb', 'rgba').replace(')', ', 0.3)'));
        gradient.addColorStop(1, particle.color.replace('rgb', 'rgba').replace(')', ', 0)'));
        ctx.fillStyle = gradient;
        ctx.fill();

        // Reset connections
        particle.connections = [];

        // Draw connections
        particles.forEach((otherParticle, otherIndex) => {
          if (index === otherIndex) return;

          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150 && particle.connections.length < 3 && otherParticle.connections.length < 3) {
            particle.connections.push(otherIndex);
            otherParticle.connections.push(index);

            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);

            // Create gradient for connection
            const gradient = ctx.createLinearGradient(
              particle.x, particle.y,
              otherParticle.x, otherParticle.y
            );
            gradient.addColorStop(0, particle.color.replace('rgb', 'rgba').replace(')', ', ' + (0.5 - distance / 300) + ')'));
            gradient.addColorStop(1, otherParticle.color.replace('rgb', 'rgba').replace(')', ', ' + (0.5 - distance / 300) + ')'));
            
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 2;
            ctx.stroke();
          }
        });
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      canvas.removeEventListener('mousemove', () => {});
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.4 }}
    />
  );
};

export default HeroBackground;

// import React, { useEffect, useRef } from "react";

// interface Particle {
//   x: number;
//   y: number;
//   vx: number;
//   vy: number;
//   radius: number;
//   color: string;
//   connections: number[];
// }

// const HeroBackground: React.FC = () => {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const mousePos = useRef<{ x: number; y: number } | null>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     // Set canvas size function
//     const setCanvasSize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };
//     setCanvasSize();
//     window.addEventListener("resize", setCanvasSize);

//     // Create particles
//     const particles: Particle[] = [];
//     const numParticles = 80;
//     const colors = ["#4F46E5", "#10B981", "#F59E0B"];

//     for (let i = 0; i < numParticles; i++) {
//       particles.push({
//         x: Math.random() * canvas.width,
//         y: Math.random() * canvas.height,
//         vx: (Math.random() - 0.5) * 0.6,
//         vy: (Math.random() - 0.5) * 0.6,
//         radius: Math.random() * 2 + 1.5,
//         color: colors[Math.floor(Math.random() * colors.length)],
//         connections: [],
//       });
//     }

//     // Mouse move listener
//     const handleMouseMove = (e: MouseEvent) => {
//       mousePos.current = { x: e.clientX, y: e.clientY };
//     };
//     const handleMouseLeave = () => {
//       mousePos.current = null;
//     };

//     canvas.addEventListener("mousemove", handleMouseMove);
//     canvas.addEventListener("mouseleave", handleMouseLeave);

//     let animationFrameId: number;

//     const animate = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       // Draw translucent background for motion blur effect (soft trails)
//       ctx.fillStyle = "rgba(0, 0, 0, 0.15)";
//       ctx.fillRect(0, 0, canvas.width, canvas.height);

//       particles.forEach((p, i) => {
//         // Mouse interaction: repel particles gently
//         if (mousePos.current) {
//           const dx = p.x - mousePos.current.x;
//           const dy = p.y - mousePos.current.y;
//           const dist = Math.sqrt(dx * dx + dy * dy);

//           const influenceRadius = 120;
//           if (dist < influenceRadius && dist > 0) {
//             const force = (influenceRadius - dist) / influenceRadius;
//             p.vx += (dx / dist) * force * 0.15;
//             p.vy += (dy / dist) * force * 0.15;
//           }
//         }

//         // Move particles
//         p.x += p.vx;
//         p.y += p.vy;

//         // Friction to slow down velocity over time
//         p.vx *= 0.93;
//         p.vy *= 0.93;

//         // Bounce off edges
//         if (p.x < p.radius) {
//           p.x = p.radius;
//           p.vx *= -1;
//         }
//         if (p.x > canvas.width - p.radius) {
//           p.x = canvas.width - p.radius;
//           p.vx *= -1;
//         }
//         if (p.y < p.radius) {
//           p.y = p.radius;
//           p.vy *= -1;
//         }
//         if (p.y > canvas.height - p.radius) {
//           p.y = canvas.height - p.radius;
//           p.vy *= -1;
//         }

//         // Reset connections
//         p.connections = [];

//         // Draw particles (softer colors with some opacity)
//         ctx.beginPath();
//         ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
//         ctx.fillStyle = p.color + "99"; // add 60% opacity (hex alpha)
//         ctx.fill();

//         // Glow effect - softer
//         const gradient = ctx.createRadialGradient(
//           p.x,
//           p.y,
//           p.radius / 2,
//           p.x,
//           p.y,
//           p.radius * 3
//         );
//         gradient.addColorStop(0, p.color + "55"); // ~33% opacity
//         gradient.addColorStop(1, p.color + "00"); // transparent
//         ctx.fillStyle = gradient;
//         ctx.fill();
//       });

//       // Draw connections with softer lines
//       const maxDistance = 150;
//       particles.forEach((p, i) => {
//         for (let j = i + 1; j < particles.length; j++) {
//           const p2 = particles[j];
//           const dx = p.x - p2.x;
//           const dy = p.y - p2.y;
//           const dist = Math.sqrt(dx * dx + dy * dy);

//           if (
//             dist < maxDistance &&
//             p.connections.length < 3 &&
//             p2.connections.length < 3
//           ) {
//             p.connections.push(j);
//             p2.connections.push(i);

//             const alpha = 0.25 * (1 - dist / maxDistance); // softer line opacity

//             const grad = ctx.createLinearGradient(p.x, p.y, p2.x, p2.y);
//             grad.addColorStop(0, p.color + Math.floor(alpha * 255).toString(16).padStart(2, "0"));
//             grad.addColorStop(1, p2.color + Math.floor(alpha * 255).toString(16).padStart(2, "0"));

//             ctx.strokeStyle = grad;
//             ctx.lineWidth = 1;
//             ctx.beginPath();
//             ctx.moveTo(p.x, p.y);
//             ctx.lineTo(p2.x, p2.y);
//             ctx.stroke();
//           }
//         }
//       });

//       animationFrameId = requestAnimationFrame(animate);
//     };

//     animate();

//     return () => {
//       window.removeEventListener("resize", setCanvasSize);
//       canvas.removeEventListener("mousemove", handleMouseMove);
//       canvas.removeEventListener("mouseleave", handleMouseLeave);
//       cancelAnimationFrame(animationFrameId);
//     };
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       className="absolute inset-0 w-full h-full"
//       style={{ opacity: 0.6, backgroundColor: "#000" }}
//     />
//   );
// };

// export default HeroBackground;
