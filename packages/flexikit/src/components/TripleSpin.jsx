import React from "react";
import '../index.css';
import { constSize, constColor } from "../constant";

function TripleSpin({
  color = constColor,
  size = constSize * 3,
  strokeWidth = 3,
  duration = '2s',
  loading = true,
}) {
  const keyframes = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;

  const spin = {
    animation: `spin ${duration} linear infinite`,
  };

  return (
    <div
      className={`${loading ? 'flex' : 'hidden'}`}
      style={{ height: `${size}px`, width: `${size}px`}}
    >
      <style>{keyframes}</style>
      <div
        className="flex justify-center items-center w-full h-full rounded-full"
        style={{...spin, borderTop: `${strokeWidth}px solid ${color}`, borderRight: `${strokeWidth}px solid transparent`, borderBottom: `${strokeWidth}px solid transparent`, borderLeft: `${strokeWidth}px solid transparent`}}
      >
        <div
          className="flex justify-center items-center rounded-full"
          style={{ ...spin, borderTop: `${strokeWidth}px solid transparent`, borderRight: `${strokeWidth}px solid ${color}`, borderBottom: `${strokeWidth}px solid transparent`, borderLeft: `${strokeWidth}px solid transparent`, height: '90%', width: '90%' }}
        >
          <div
            className="rounded-full"
            style={{ ...spin, borderTop: `${strokeWidth}px solid transparent`, borderRight: `${strokeWidth}px solid transparent`, borderBottom: `${strokeWidth}px solid ${color}`, borderLeft: `${strokeWidth}px solid transparent`, height: '90%', width: '90%'  }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default TripleSpin;
