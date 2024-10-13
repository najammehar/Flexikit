import React from "react";
import { constSize, constColor } from "../constant";

function WaveLoader({
  size = constSize * 2,
  color = constColor,
  duration = "1s",
  loading = true,
}) {
  const dotSize = (size / 6) * 1.5;
  const keyframes = `
    @keyframes wave {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-20px); }
    }
  `;

  const dotStyle = {
    width: `${dotSize}px`,
    height: `${dotSize}px`,
    borderRadius: "50%",
    backgroundColor: color,
    display: "inline-block",
    animation: `wave ${duration} ease-in-out infinite`,
    margin: `0 ${dotSize / 10}px`,
  };

  const dot1 = {
    animationDelay: "0s",
  };

  const dot2 = {
    animationDelay: "0.2s",
  };

  const dot3 = {
    animationDelay: "0.4s",
  };

  return (
    <div className={loading ? "flex justify-center items-center" : "hidden"}>
      <style>{keyframes}</style>
      <div style={{ ...dotStyle, ...dot1 }} />
      <div style={{ ...dotStyle, ...dot2 }} />
      <div style={{ ...dotStyle, ...dot3 }} />
    </div>
  );
}

export default WaveLoader;
