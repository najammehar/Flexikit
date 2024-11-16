import React from "react";
import "../index.css";
import { constSize, constColor } from "../constant";

const PulseLoader = ({
  size = constSize * 4,
  color = constColor,
  duration = "2s",
  borderWidth = 20,
  loading = true,
}) => {
  const numericDuration = parseFloat(duration);
  console.log(numericDuration);

  const delay = numericDuration / 2;

  return (
    <div className={`${loading ? "block" : "hidden"}`}>
      <style>
        {`
                @keyframes loaderPulse {
                    0% {
                        border-width: ${borderWidth}px;
                        transform: scale(0);
                        opacity: 1;
                    }
                    100% {
                        border-width: 0px;
                        transform: scale(1);
                        opacity: 0;
                    }
                }
            `}
      </style>
      <div className={`relative flex items-center justify-center`}>
        <div
          className="absolute rounded-full"
          style={{
            animation: `loaderPulse ${duration} linear infinite`,
            width: `${size}px`,
            height: `${size}px`,
            borderColor: `${color}`,
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            animation: `loaderPulse ${duration} linear infinite ${delay}${
              duration.endsWith("ms") ? "ms" : "s"
            }`,
            width: `${size}px`,
            height: `${size}px`,
            borderColor: `${color}`,
          }}
        />
      </div>
    </div>
  );
};

export default PulseLoader;
