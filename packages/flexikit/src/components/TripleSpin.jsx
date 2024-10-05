import React from "react";
import { constSize, constColor } from "../constant";

function TripleSpin({
  color = constColor,
  size = constSize * 4,
  strokeWidth = 4,
  duration = 2000,
}) {
  const keyframes = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;

  const spin = {
    animation: `spin ${duration}ms linear infinite`,
  };

  const circleStyle = {
    "--circle-color": color,
    "--stroke-width": `${strokeWidth}px`,
  };

  return (
    <div
      className="rounded-full overflow-visible"
      style={{ height: `${size}px`, width: `${size}px`, ...circleStyle }}
    >
      <style>{keyframes}</style>
      <div
        className="flex justify-center items-center w-full h-full border-[length:var(--stroke-width)] border-transparent border-t-[color:var(--circle-color)] rounded-full"
        style={spin}
      >
        <div
          className="flex justify-center items-center h-[90%] w-[90%] border-[length:var(--stroke-width)] border-transparent border-t-[color:var(--circle-color)] rounded-full"
          style={{ ...spin, animationDelay: "-0.3s" }}
        >
          <div
            className="h-[90%] w-[90%] border-[length:var(--stroke-width)] border-transparent border-t-[color:var(--circle-color)] rounded-full"
            style={{ ...spin, animationDelay: "-0.6s" }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default TripleSpin;
