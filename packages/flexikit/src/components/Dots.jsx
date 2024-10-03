import React from 'react';

const Dots = ({
  count = 8,
  size = 80,
  dotSize = 10,
  color = '#123456',
  duration = 1,
  delay = 0.125
}) => {
  const keyframes = `
    @keyframes pulse {
      0%, 100% { transform: scale(0); opacity: 0.5; }
      50% { transform: scale(1); opacity: 1; }
    }
  `;

  const radius = (size - dotSize) / 2;

  return (
    <div className="relative" style={{ width: `${size}px`, height: `${size}px` }}>
      <style>{keyframes}</style>
      {Array.from({ length: count }).map((_, index) => {
        const angle = (index / count) * 2 * Math.PI;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);
        
        return (
          <div
            key={index}
            className="absolute rounded-full"
            style={{
              width: `${dotSize}px`,
              height: `${dotSize}px`,
              backgroundColor: color.startsWith('#') ? color : `var(--tw-${color}, ${color})`,
              top: `calc(50% - ${dotSize/2}px + ${y}px)`,
              left: `calc(50% - ${dotSize/2}px + ${x}px)`,
              animation: `pulse ${duration}s ease-in-out infinite`,
              animationDelay: `${index * delay}s`
            }}
          />
        );
      })}
    </div>
  );
};

export default Dots;