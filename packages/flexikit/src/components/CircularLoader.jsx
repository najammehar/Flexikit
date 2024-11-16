import React from 'react';
import '../index.css';
import { constSize, constColor } from "../constant";

function CircularLoader({
  size = constSize * 3,
  color = constColor,
  duration = "3s",
  loading = true,
}) {
  const dotSize = (size / 9) * 1.5;
  
  const keyframes = `
    @keyframes rotate {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    @keyframes fade {
      0%, 100% { opacity: 0.3; }
      50% { opacity: 1; }
    }
  `;

  const containerStyle = {
    width: `${size}px`,
    height: `${size}px`,
    position: 'relative',
    animation: `rotate ${duration} cubic-bezier(0.4, 0, 0.2, 1) infinite`,
    willChange: 'transform'
  };

  const baseDotStyle = {
    width: `${dotSize}px`,
    height: `${dotSize}px`,
    borderRadius: "50%",
    backgroundColor: color,
    position: 'absolute',
    top: '50%',
    left: '50%',
    animation: `fade ${duration} ease-in-out infinite`,
    willChange: 'opacity'
  };

  // Generate individual dot positions
  const getDotPosition = (index, totalDots = 12) => {
    const radius = size / 2 - dotSize / 2;
    const angle = (index * 360) / totalDots;
    const x = radius * Math.cos((angle * Math.PI) / 180);
    const y = radius * Math.sin((angle * Math.PI) / 180);
    
    return {
      transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
      animationDelay: `${(index * parseFloat(duration)) / totalDots}s`
    };
  };

  const dotPositions = Array.from({ length: 12 }, (_, index) => ({
    ...baseDotStyle,
    ...getDotPosition(index)
  }));

  return (
    <div className={loading ? "block" : "hidden"}>
      <style>{keyframes}</style>
      <div style={containerStyle}>
        {dotPositions.map((dotStyle, index) => (
          <div key={index} style={dotStyle} />
        ))}
      </div>
    </div>
  );
}

export default CircularLoader;