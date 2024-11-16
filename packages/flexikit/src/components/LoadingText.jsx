import React, { useState, useEffect } from "react";
import "../index.css";
import { constSize, constColor } from "../constant";

const LoadingText = ({
  loading = true,
  size = constSize,
  color = constColor,
}) => {
  const [dots, setDots] = useState("");

  useEffect(() => {
    if (!loading) return;

    const interval = setInterval(() => {
      setDots((prevDots) => {
        if (prevDots.length >= 3) return "";
        return prevDots + ".";
      });
    }, 500);

    return () => clearInterval(interval);
  }, [loading]);

  if (!loading) return null;

  const textStyle = {
    fontSize: `${size}px`,
    fontFamily: "'Playfair Display', serif",
    color: color,
    textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
  };

  return (
    <div className="block">
      <span className="tracking-wide" style={textStyle}>
        Loading
        <span className="inline-block w-16 text-left">{dots}</span>
      </span>
    </div>
  );
};

export default LoadingText;
