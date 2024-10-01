import React from "react";

function PulsingDots({
  size = "16px",
  color = "#3498db", // Default primary color
  secondaryColor = "#e74c3c", // Default secondary color
  pulseDuration = "1s", // Time for one pulse animation cycle
}) {
  const keyframes = `
        @keyframes pulse {
            0%, 100% {
                transform: scale(1);
                opacity: 1;
            }
            50% {
                transform: scale(1.5);
                opacity: 0.5;
            }
        }
    `;

  const dotStyle = {
    width: size,
    height: size,
    borderRadius: "50%",
    display: "inline-block",
    margin: "0 5px",
    animation: `pulse ${pulseDuration} ease-in-out infinite`,
  };

  const dot1 = {
    animationDelay: "0s",
    backgroundColor: color,
  };

  const dot2 = {
    animationDelay: "0.2s",
    backgroundColor: secondaryColor,
  };

  const dot3 = {
    animationDelay: "0.4s",
    backgroundColor: color,
  };

  return (
    <div className="inline-block">
      <style>{keyframes}</style>
      <div className="flex justify-center items-center">
        <div style={{ ...dotStyle, ...dot1 }} />
        <div style={{ ...dotStyle, ...dot2 }} />
        <div style={{ ...dotStyle, ...dot3 }} />
      </div>
    </div>
  );
}

export default PulsingDots;
