import React from 'react';
import "../index.css";
import { constSize, constColor, constSecColor } from "../constant";

const BarLoader = ({size = constSize * 3, color = constColor, secCol = constSecColor , duration = '3s', loading = true}) => {
  return (
    <div className={`relative h-1 ${loading ? 'block' : 'hidden'}`}
        style={{width: `${size}px`, backgroundColor: secCol}}
    >
      <style>{`
        @keyframes loading {
          0% {
            background-position: -150% 0, -150% 0;
          }
          66% {
            background-position: 250% 0, -150% 0;
          }
          100% {
            background-position: 250% 0, 250% 0;
          }
        }

        .loader-animation {
          background-image: linear-gradient(${color} 0 0), linear-gradient(${color} 0 0);
          background-repeat: no-repeat;
          background-size: 60% 100%;
          animation: loading ${duration} infinite;
        }
      `}</style>
      <div className="absolute inset-0 loader-animation"></div>
    </div>
  );
};

export default BarLoader;