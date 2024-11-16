import React, { useMemo } from 'react';
import '../index.css';
import { constSize, constColor } from "../constant";

function PulseSquaresLoader({
  size = constSize*3,
  color = constColor,
  duration = "2s",
  loading = true,
  gridSize = 3 
}) {
  const squareSize = size / (gridSize * 1.5);
  const gap = squareSize / 3;

  const keyframes = `
    @keyframes pulseSquare {
      0%, 100% {
        transform: scale(0.3) rotate(0deg);
        opacity: 0.3;
      }
      50% {
        transform: scale(1) rotate(180deg);
        opacity: 1;
      }
    }
  `;

  const styles = useMemo(() => ({
    container: {
      width: `${size}px`,
      height: `${size}px`,
      position: 'relative',
      display: 'grid',
      gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
      gap: `${gap}px`,
      padding: `${gap}px`
    },
    square: {
      width: `${squareSize}px`,
      height: `${squareSize}px`,
      backgroundColor: color,
      animation: `pulseSquare ${duration} ease-in-out infinite`,
      willChange: 'transform, opacity',
      borderRadius: '15%',
      transformOrigin: 'center'
    }
  }), [size, squareSize, gap, color, duration, gridSize]);

  const getDelay = (index) => {
    const row = Math.floor(index / gridSize);
    const col = index % gridSize;
    const maxDistance = gridSize - 1;
    const distance = Math.abs(row - Math.floor(gridSize/2)) + Math.abs(col - Math.floor(gridSize/2));
    const delayFactor = distance / maxDistance;
    return `${delayFactor * parseFloat(duration) / 2}s`;
  };

  const squares = useMemo(() => {
    const squareElements = [];
    const totalSquares = gridSize * gridSize;
    
    for (let i = 0; i < totalSquares; i++) {
      squareElements.push(
        <div
          key={i}
          style={{
            ...styles.square,
            animationDelay: getDelay(i)
          }}
        />
      );
    }
    return squareElements;
  }, [gridSize, styles.square]);

  if (!loading) return null;

  return (
    <div className="block">
      <style>{keyframes}</style>
      <div style={styles.container}>
        {squares}
      </div>
    </div>
  );
}

export default PulseSquaresLoader;
