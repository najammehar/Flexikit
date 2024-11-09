import React from "react";
import "../index.css";
import { constSize, constColor } from "../constant";

const CrescentLoader = ({
  size = constSize * 3,
  color = constColor,
  duration = "1.5s",
  loading = true,
  maxStrokeWidth = 5,
  minStrokeWidth = 0.5,
}) => {
  const radius = size / 2 - maxStrokeWidth * 2;

  const keyframes = `
    @keyframes rotate {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
  `;

  const createTaperedArc = () => {
    const segments = 30;
    const arcLength = 0.6;
    const paths = [];

    for (let i = 0; i < segments; i++) {
      const progress = i / (segments - 1);
      const startAngle = 2 * Math.PI * progress * arcLength;
      const endAngle = 2 * Math.PI * (progress + 1 / segments) * arcLength;

      const x1 = radius * Math.cos(startAngle);
      const y1 = radius * Math.sin(startAngle);
      const x2 = radius * Math.cos(endAngle);
      const y2 = radius * Math.sin(endAngle);

      // Use a cubic easing function for smoother tapering
      const easeProgress = 1 - (1 - progress) * (1 - progress) * (1 - progress);
      const strokeWidth =
        minStrokeWidth + (maxStrokeWidth - minStrokeWidth) * easeProgress;

      paths.push(
        <path
          key={i}
          d={`M ${x1} ${y1} A ${radius} ${radius} 0 0 1 ${x2} ${y2}`}
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap={
            i === 0 ? "round" : i === segments - 1 ? "round" : "butt"
          }
          fill="none"
        />
      );
    }

    return paths;
  };

  return (
    <div className={loading ? "flex justify-center items-center" : "hidden"}>
      <style>{keyframes}</style>
      <div
        className="relative"
        style={{
          width: size,
          height: size,
          animation: `rotate ${duration} linear infinite`,
        }}
      >
        <svg
          width={size}
          height={size}
          viewBox={`-${size / 2} -${size / 2} ${size} ${size}`}
          style={{ transform: "rotate(-90deg)" }}
        >
          {createTaperedArc()}
        </svg>
      </div>
    </div>
  );
};

export default CrescentLoader;
