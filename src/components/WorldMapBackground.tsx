import React from 'react';

const WorldMapBackground: React.FC = () => {
  // Generate random coordinates for connection points
  const generatePoints = (count: number) => {
    return Array.from({ length: count }, () => ({
      x: 200 + Math.random() * 1040,
      y: 100 + Math.random() * 700,
      size: 2 + Math.random() * 3,
      animationDelay: Math.random() * 4
    }));
  };

  const points = generatePoints(35); // More connection points
  return (
    <div className="absolute inset-0 overflow-hidden opacity-50 pointer-events-none bg-gradient-to-b from-blue-900/20 to-transparent">
      <svg
        className="w-full h-full animate-slow-spin"
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* World Map Grid */}
        <pattern id="grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <path 
            d="M 40 0 L 0 0 0 40" 
            fill="none" 
            stroke="rgba(66, 153, 225, 0.15)" 
            strokeWidth="0.8"
          />
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid)" />

        {/* Glowing Circles */}
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>

        {/* Connection Points */}
        {points.map((point, i) => (
          <g key={i} style={{ animationDelay: `${point.animationDelay}s` }}>
            <circle
              cx={point.x}
              cy={point.y}
              r={point.size * 2} // Increased size
              fill="#60A5FA"
              className="animate-pulse"
              filter="url(#glow)"
            />
          </g>
        ))}
        
        {/* Connection Lines */}
        {points.map((point, i) => (
          points.slice(i + 1).map((target, j) => {
            const distance = Math.hypot(target.x - point.x, target.y - point.y);
            if (distance < 200) { // Only connect nearby points
              return (
                <line
                  key={`${i}-${j}`}
                  x1={point.x}
                  y1={point.y}
                  x2={target.x}
                  y2={target.y}
                  stroke="#60A5FA"
                  strokeWidth="1"
                  strokeOpacity={1 - distance / 300}
                  strokeDasharray="5,5"
                  className="animate-pulse-slow"
                />
              );
            }
            return null;
          })
        ))}
      </svg>
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 2}px`, // Increased size
              height: `${Math.random() * 6 + 2}px`, // Increased size
              backgroundColor: `rgba(96, 165, 250, ${Math.random() * 0.5 + 0.5})`, // Increased opacity
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${15 + Math.random() * 15}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default WorldMapBackground;
