import React from "react";
import '../index.css';
import { constSize, constColor, constSecColor } from "../constant";

function SpinningCircles({
  duration = "2s",
  size = constSize * 1.5,
  color = constColor,
  secondaryColor = constSecColor,
  loading = true,
}) {
  const dotSize = size / 2;
  const keyframes = `
        @keyframes degree {
            0%, 100% { transform: translateY(0); }
            50% { transform: translate(-25%, -25%); }
        }
        @keyframes degree135 {
            0%, 100% { transform: translateY(0); }
            50% { transform: translate(25%, -25%); }
        }
        @keyframes degree225 {
            0%, 100% { transform: translateY(0); }
            50% { transform: translate(25%, 25%); }
        }
        @keyframes degree315 {
            0%, 100% { transform: translateY(0); }
            50% { transform: translate(-25%, 25%); }
        }
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;

  const degree = {
    animation: `degree ${duration} ease-in-out infinite`,
  };
  const degree135 = {
    animation: `degree135 ${duration} ease-in-out infinite`,
  };
  const degree225 = {
    animation: `degree225 ${duration} ease-in-out infinite`,
  };
  const degree315 = {
    animation: `degree315 ${duration} ease-in-out infinite`,
  };
  const spin = {
    animation: `spin ${duration} ease-in-out infinite`,
  };
  const sizeStyle = {
    width: dotSize,
    height: dotSize,
  };

  return (
    <div className={`${loading ? 'block' : 'hidden'}`} style={{...spin, height: `${size}`, width: `${size}`}}>
      <div className="flex gap-1 mb-1">
        <style>{keyframes}</style>
        <div
          style={{ ...sizeStyle, ...degree, backgroundColor: color }}
          className="rounded-full"
        />
        <div
          style={{
            ...sizeStyle,
            ...degree135,
            backgroundColor: secondaryColor,
          }}
          className="rounded-full"
        />
      </div>
      <div className="flex gap-1">
        <div
          style={{
            ...sizeStyle,
            ...degree315,
            backgroundColor: secondaryColor,
          }}
          className="rounded-full"
        />
        <div
          style={{
            ...sizeStyle,
            ...degree225,
            backgroundColor: secondaryColor,
          }}
          className="rounded-full"
        />
      </div>
    </div>
  );
}

export default SpinningCircles;
