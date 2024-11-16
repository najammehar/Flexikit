import React, { useMemo } from 'react';
import '../index.css';
import { constSize, constColor } from "../constant";

function SingleSquareLoader({
  size = constSize * 3,
  color = constColor,
  duration = "2s",
  loading = true
}) {
  const keyframes = `
    @keyframes pulseAndRotate {
      0% {
        transform: scale(0.3) rotate(0deg);
        opacity: 0.3;
        box-shadow: 0 0 0 0 ${color}40;
      }
      50% {
        transform: scale(1) rotate(180deg);
        opacity: 1;
        box-shadow: 0 0 20px 10px ${color}20;
      }
      100% {
        transform: scale(0.3) rotate(360deg);
        opacity: 0.3;
        box-shadow: 0 0 0 0 ${color}40;
      }
    }
  `;

  const styles = useMemo(() => ({
    container: {
      width: `${size}px`,
      height: `${size}px`,
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    square: {
      width: `${size / 2}px`,
      height: `${size / 2}px`,
      backgroundColor: color,
      animation: `pulseAndRotate ${duration} ease-in-out infinite`,
      willChange: 'transform, opacity, box-shadow',
      borderRadius: '15%',
      transformOrigin: 'center',
      transition: 'all 0.3s ease'
    }
  }), [size, color, duration]);

  if (!loading) return null;

  return (
    <div className="block">
      <style>{keyframes}</style>
      <div style={styles.container}>
        <div style={styles.square} />
      </div>
    </div>
  );
}

export default SingleSquareLoader;