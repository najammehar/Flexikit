import React from "react";
import '../index.css'
import { constColor, constSize } from '../constant'

function WobbleSpin({
  size = constSize,
  color = constColor,
  duration = "1s",
  loading = true,
}) {
  const keyframes = `
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    @keyframes wobble {
        0% 100% {
            transform: translateY(0%) scale(1);
            opacity: 1;
        }
        50% {
            transform: translateY(-66%) scale(0.65);
            opacity: 0.8;
        }
    }
    @keyframes wobble2 {
        0% 100% {
            transform: translateY(0%) scale(1);
            opacity: 0.8;
        }
        50% {
            transform: translateY(66%) scale(0.65);
            opacity: 1;
        }
    }  
    `;
  const spin = {
    animation: `spin ${duration} infinite`,
    animationTimingFunction: "linear",
  };
  const style = {
    animation: `wobble2 ${duration} infinite`,
    animationTimingFunction: "linear",
  };
  const style2 = {
    animation: `wobble ${duration} infinite`,
    animationTimingFunction: "linear",
  };
  return (
    <div
      className={`relative ${loading ? "block" : "hidden"}`}
      style={{
        ...spin,
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      <style>{keyframes}</style>
      <div
        className={`absolute size-[40%] rounded-full top-0`}
        style={{
          ...style2,
          backgroundColor: `${color}`,
        }}
      />
      <div
        className="absolute size-[40%] rounded-full bottom-0 left-0"
        style={{
          ...style,
          animationDelay: "0.2s",
          backgroundColor: `${color}`,
        }}
      />
      <div
        className="absolute size-[40%] rounded-full bottom-0 right-0"
        style={{
          ...style2,
          animationDelay: "0.4s",
          backgroundColor: `${color}`,
        }}
      />
    </div>
  );
}

export default WobbleSpin;
