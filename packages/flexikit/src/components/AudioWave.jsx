import React from "react";
import '../index.css';
import { constSize, constColor } from "../constant";

function AudioWave({
  size = constSize * 3,
  duration = "1s",
  color = constColor,
  loading = true,
}) {
  const keyframes = `
      @keyframes scaleY {
          0%, 100%{ transform: scaleY(1); }
          50% { transform: scaleY(4); }
      }
      `;

  const waweStyle = {
    animation: `scaleY ${duration} ease-in infinite`,
    width: `${size / 25}px`,
    height: "20%",
    backgroundColor: color,
  };

  return (
    <>
      <div
        className={`${loading ? "flex" : "hidden"} justify-between items-center`}
        style={{ width: `${size}px`, height: `${size}px` }}
      >
        <style>{keyframes}</style>
        <div
          className="bg-white"
          style={{ ...waweStyle, animationDelay: "0.1s" }}
        />
        <div
          className="bg-white"
          style={{ ...waweStyle, animationDelay: "0.2s" }}
        />
        <div
          className="bg-white"
          style={{ ...waweStyle, animationDelay: "0.3s" }}
        />
        <div
          className="bg-white"
          style={{ ...waweStyle, animationDelay: "0.1s" }}
        />
        <div
          className="bg-white"
          style={{ ...waweStyle, animationDelay: "0.3s" }}
        />
        <div
          className="bg-white"
          style={{ ...waweStyle, animationDelay: "0.2s" }}
        />
        <div
          className="bg-white"
          style={{ ...waweStyle, animationDelay: "0.1s" }}
        />
        <div
          className="bg-white"
          style={{ ...waweStyle, animationDelay: "0.2s" }}
        />
        <div
          className="bg-white"
          style={{ ...waweStyle, animationDelay: "0.3s" }}
        />
      </div>
    </>
  );
}

export default AudioWave;
