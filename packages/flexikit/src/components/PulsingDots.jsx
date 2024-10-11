import React from "react";
import '../index.css';
import { constSize, constColor, constSecColor } from "../constant";

function PulsingDots({
  size = constSize * 2,
  color = constColor,
  secondaryColor = constSecColor,
  duration = "1s",
  loading = true,
}) {
  const dotSize = constSize / 2;
  const keyframes = `
    @keyframes pulse {
      0%, 100% {
        transform: scale(1);
        opacity: 1;
      }
      50% {
        transform: scale(1.5);
        opacity: 0.5;
      }
    }
  `;

  const dotStyle = {
    width: `${dotSize}px`,
    height: `${dotSize}px`,
    borderRadius: "50%",
    display: "inline-block",
    margin: `0 ${dotSize / 8}px`,
    animation: `pulse ${duration} ease-in-out infinite`,
  };

  const dot1 = {
    animationDelay: "0s",
    backgroundColor: color,
  };

  const dot2 = {
    animationDelay: "0.2s",
    backgroundColor: secondaryColor,
  };

  const dot3 = {
    animationDelay: "0.4s",
    backgroundColor: color,
  };

  return (
    <div
      className={`${loading ? 'flex' : 'hidden'} items-center justify-center`}
      style={{ width: size, height: size }}
    >
      <style>{keyframes}</style>
      <div className="flex justify-center items-center">
        <div style={{ ...dotStyle, ...dot1 }} />
        <div style={{ ...dotStyle, ...dot2 }} />
        <div style={{ ...dotStyle, ...dot3 }} />
      </div>
    </div>
  );
}

export default PulsingDots;
