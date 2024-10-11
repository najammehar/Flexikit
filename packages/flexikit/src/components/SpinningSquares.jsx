import "../index.css";
import React from "react";
import { constSize, constColor } from "../constant";

const SpinningSquares = ({
  color = constColor,
  size = constSize * 2,
  squareCount = 4,
  duration = "4s",
  loading = true,
}) => {
  const keyframes = `
    @keyframes spin-and-scale {
      0% {
        transform: rotate(0deg) scale(1);
      }
      50% {
        transform: rotate(180deg) scale(0.5);
      }
      100% {
        transform: rotate(360deg) scale(1);
      }
    }
  `;

  const createSquare = (index) => {
    const squareSize = size * (1 - index * 0.2);
    const delay = `${(index / squareCount) * parseFloat(duration)}s`;

    const squareStyle = {
      height: `${squareSize}px`,
      width: `${squareSize}px`,
      borderColor: color,
      animation: `spin-and-scale ${duration} ease-in-out infinite`,
      animationDelay: delay,
    };

    return (
      <div
        key={index}
        className="absolute border-4 border-solid"
        style={squareStyle}
      ></div>
    );
  };

  return (
    <div
      className={`relative ${
        loading ? "flex" : "hidden"
      } items-center justify-center`}
      style={{ height: `${size}px`, width: `${size}px` }}
    >
      <style>{keyframes}</style>
      {Array.from({ length: squareCount }, (_, index) => createSquare(index))}
    </div>
  );
};

export default SpinningSquares;
