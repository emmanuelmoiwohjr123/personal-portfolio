import React, { useEffect, useRef } from 'react';

interface Electron {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

interface Nucleus {
  x: number;
  y: number;
  radius: number;
}

const ElectronBackground: React.FC = () => {
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

    // Create nucleus
    const nucleus: Nucleus = {
      x: canvas.width / 2,
      y: canvas.height / 2,
      radius: 20,
    };

    // Create electrons
    const electrons: Electron[] = [];
    const numElectrons = 5;
    const orbitRadius = 150;
    const electronRadius = 6;

    for (let i = 0; i < numElectrons; i++) {
      const angle = (i * 2 * Math.PI) / numElectrons;
      electrons.push({
        x: nucleus.x + orbitRadius * Math.cos(angle),
        y: nucleus.y + orbitRadius * Math.sin(angle),
        vx: Math.random() * 2 - 1,
        vy: Math.random() * 2 - 1,
        radius: electronRadius,
      });
    }

    // Animation
    let animationFrameId: number;
    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update nucleus position based on mouse
      const updateNucleusPosition = (e: MouseEvent) => {
        const rect = canvas.getBoundingClientRect();
        nucleus.x = e.clientX - rect.left;
        nucleus.y = e.clientY - rect.top;
      };
      canvas.addEventListener('mousemove', updateNucleusPosition);

      // Draw nucleus
      ctx.beginPath();
      ctx.arc(nucleus.x, nucleus.y, nucleus.radius, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 214, 0, 0.8)';
      ctx.fill();

      // Draw nucleus glow
      const gradient = ctx.createRadialGradient(
        nucleus.x, nucleus.y, nucleus.radius,
        nucleus.x, nucleus.y, nucleus.radius * 3
      );
      gradient.addColorStop(0, 'rgba(255, 214, 0, 0.3)');
      gradient.addColorStop(1, 'rgba(255, 214, 0, 0)');
      ctx.fillStyle = gradient;
      ctx.fill();

      // Update and draw electrons
      electrons.forEach((electron, index) => {
        // Orbital motion
        const angle = time * 0.001 + (index * 2 * Math.PI) / numElectrons;
        electron.x = nucleus.x + orbitRadius * Math.cos(angle);
        electron.y = nucleus.y + orbitRadius * Math.sin(angle);

        // Draw electron trail
        ctx.beginPath();
        ctx.arc(electron.x, electron.y, electron.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 191, 255, 0.8)';
        ctx.fill();

        // Draw electron glow
        const electronGradient = ctx.createRadialGradient(
          electron.x, electron.y, electron.radius,
          electron.x, electron.y, electron.radius * 2
        );
        electronGradient.addColorStop(0, 'rgba(0, 191, 255, 0.3)');
        electronGradient.addColorStop(1, 'rgba(0, 191, 255, 0)');
        ctx.fillStyle = electronGradient;
        ctx.fill();

        // Draw orbital path
        ctx.beginPath();
        ctx.arc(nucleus.x, nucleus.y, orbitRadius, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.stroke();

        // Draw connection lines
        ctx.beginPath();
        ctx.moveTo(nucleus.x, nucleus.y);
        ctx.lineTo(electron.x, electron.y);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.stroke();
      });

      time++;
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
};

export default ElectronBackground;
