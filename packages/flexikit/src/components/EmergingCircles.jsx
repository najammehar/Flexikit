import React from "react";
import "../index.css";
import { constSize, constColor, constSecColor } from "../constant";

function EmergingCircles({
  size = constSize * 2,
  color = constColor,
  secondaryColor = constSecColor,
  duration = "1.5s",
  loading = true,
}) {
  const keyframes = `
    @keyframes pulsate {
      0% { transform: scale(0.2); opacity: 1; }
      50% { transform: scale(1.2); opacity: 0.6; }
      100% { transform: scale(1); opacity: 0; }
    }
  `;

  const circleStyle = {
    position: "absolute",
    borderRadius: "50%",
    animation: `pulsate ${duration} ease-out infinite`,
  };

  const circle1 = {
    animationDelay: "0s",
    backgroundColor: color,
    height: `${size}px`,
    width: `${size}px`,
  };

  const circle2 = {
    animationDelay: `${parseFloat(duration) / 2}s`,
    backgroundColor: secondaryColor,
    height: `${size}px`,
    width: `${size}px`,
  };

  return (
    <div
      className={`${
        loading ? "flex" : "hidden"
      } relative items-center justify-center`}
      style={{ height: `${size}px`, width: `${size}px` }}
    >
      <style>{keyframes}</style>
      <div style={{ ...circleStyle, ...circle1 }} />
      <div style={{ ...circleStyle, ...circle2 }} />
    </div>
  );
}

export default EmergingCircles;
