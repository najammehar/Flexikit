import React from "react";
import '../index.css';
import { constSize, constColor } from "../constant";

const Dots = ({
  size = constSize * 2,
  color = constColor,
  duration = '1s',
  loading = true,
}) => {

  const dotSize = constSize / 2;
  const keyframes = `
    @keyframes pulse {
      0%, 100% { transform: scale(0); opacity: 0.5; }
      50% { transform: scale(1); opacity: 1; }
    }
  `;

  const radius = (size - dotSize) / 2;

  return (
    <div
      className={`relative ${loading ? 'block' : 'hidden'}`}
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <style>{keyframes}</style>
      {Array.from({ length: 8 }).map((_, index) => {
        const angle = (index / 8) * 2 * Math.PI;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);

        return (
          <div
            key={index}
            className="absolute rounded-full"
            style={{
              width: `${dotSize}px`,
              height: `${dotSize}px`,
              backgroundColor: color.startsWith("#")
                ? color
                : `var(--tw-${color}, ${color})`,
              top: `calc(50% - ${dotSize / 2}px + ${y}px)`,
              left: `calc(50% - ${dotSize / 2}px + ${x}px)`,
              animation: `pulse ${duration} ease-in-out infinite`,
              animationDelay: `${index * 0.125}s`,
            }}
          />
        );
      })}
    </div>
  );
};

export default Dots;
