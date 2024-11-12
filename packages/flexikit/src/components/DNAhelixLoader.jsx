import React, { useMemo } from "react";
import "../index.css";
import { constSize, constColor, constSecColor } from "../constant";

function DNAHelixLoader({
  size = constSize * 3,
  color = constColor,
  secondaryColor = constSecColor,
  duration = "3s",
  loading = true,
  particleCount = 12,
}) {
  const particleSize = size / 20;
  const pathWidth = size * 0.8;
  const pathHeight = size;

  const keyframes = `
    @keyframes rotate {
      0% { transform: rotateY(0deg); }
      100% { transform: rotateY(360deg); }
    }
    
    @keyframes float {
      0%, 100% {
        transform: translate3d(0, 0, 0) scale(1);
        opacity: 1;
      }
      50% {
        transform: translate3d(0, 0, ${size / 4}px) scale(1.2);
        opacity: 0.7;
      }
    }
    
    @keyframes pulse {
      0%, 100% { transform: scale(1); opacity: 0.8; }
      50% { transform: scale(1.2); opacity: 1; }
    }
  `;

  const styles = useMemo(
    () => ({
      container: {
        width: `${size}px`,
        height: `${pathHeight}px`,
        position: "relative",
        perspective: "1000px",
        perspectiveOrigin: "center center",
        transformStyle: "preserve-3d",
      },
      rotator: {
        width: "100%",
        height: "100%",
        position: "relative",
        animation: `rotate ${duration} linear infinite`,
        transformStyle: "preserve-3d",
      },
      particle: {
        position: "absolute",
        width: `${particleSize}px`,
        height: `${particleSize}px`,
        borderRadius: "50%",
        backgroundColor: secondaryColor,
        animation: `float ${duration} ease-in-out infinite`,
        willChange: "transform, opacity",
      },
      connector: {
        position: "absolute",
        width: "2px",
        backgroundColor: color,
        opacity: 0.3,
        transformOrigin: "center",
        animation: `pulse ${duration} ease-in-out infinite`,
      },
    }),
    [size, particleSize, color, secondaryColor, duration]
  );

  const elements = useMemo(() => {
    const items = [];

    for (let i = 0; i < particleCount; i++) {
      const angle = (i / particleCount) * Math.PI * 2;
      const verticalPosition = (i / particleCount) * pathHeight;
      const horizontalOffset = Math.sin(angle) * (pathWidth / 2);
      const depthOffset = Math.cos(angle) * (pathWidth / 2);

      items.push(
        <div
          key={`particle-${i}`}
          style={{
            ...styles.particle,
            left: `${size / 2 + horizontalOffset - particleSize / 2}px`,
            top: `${verticalPosition}px`,
            transform: `translateZ(${depthOffset}px)`,
            animationDelay: `${(i / particleCount) * parseFloat(duration)}s`,
          }}
        />
      );

      if (i < particleCount - 1) {
        const nextAngle = ((i + 1) / particleCount) * Math.PI * 2;
        const nextHorizontalOffset = Math.sin(nextAngle) * (pathWidth / 2);
        const length = Math.sqrt(
          Math.pow(horizontalOffset - nextHorizontalOffset, 2) +
            Math.pow(pathHeight / particleCount, 2)
        );
        const rotation = Math.atan2(
          nextHorizontalOffset - horizontalOffset,
          pathHeight / particleCount
        );

        items.push(
          <div
            key={`connector-${i}`}
            style={{
              ...styles.connector,
              left: `${size / 2 + horizontalOffset}px`,
              top: `${verticalPosition}px`,
              height: `${length}px`,
              transform: `rotate(${rotation}rad)`,
              transformOrigin: "top left",
              animationDelay: `${(i / particleCount) * parseFloat(duration)}s`,
            }}
          />
        );
      }
    }

    return items;
  }, [
    particleCount,
    size,
    pathHeight,
    pathWidth,
    styles.particle,
    styles.connector,
    duration,
    particleSize,
  ]);

  if (!loading) return null;

  return (
    <div className="flex justify-center items-center">
      <style>{keyframes}</style>
      <div style={styles.container}>
        <div style={styles.rotator}>{elements}</div>
      </div>
    </div>
  );
}

export default DNAHelixLoader;
