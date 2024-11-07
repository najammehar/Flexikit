import React from 'react';
import '../index.css';
import { constSize, constColor } from "../constant";

const SyncRotatingDots = ({ size = constSize/3, duration = "1.5s", color = constColor, loading = true }) => {
    const keyframes = `
    @keyframes rotating {
        0% {
          transform: rotate(0deg) translateY(-200%);
        }
        60%, 100% {
          transform: rotate(360deg) translateY(-200%);
        }
    }
    `;
    const r1 = {
        animation: `rotating ${duration} infinite `,    
    }
return (
    <div className={`relative ${loading ? "block" : "hidden" }`} style={{ width: `${size}px`, height: `${size}px` }}>
            <style>{keyframes}</style>
            <div 
            className="w-full h-full rounded-full" 
            style={{ ...r1, animationDelay: "0.15s", backgroundColor: `${color}` }} />
            <div 
            className="w-full h-full rounded-full opacity-85" 
            style={{ ...r1, animationDelay: "0.3s" , backgroundColor: `${color}` }} />
            <div 
            className="w-full h-full rounded-full opacity-70" 
            style={{ ...r1, animationDelay: "0.45s", backgroundColor: `${color}` }} />
            <div 
            className="w-full h-full rounded-full opacity-55" 
            style={{ ...r1, animationDelay: "0.60s", backgroundColor: `${color}` }} />
            <div 
            className="w-full h-full rounded-full opacity-40" 
            style={{ ...r1, animationDelay: "0.75s", backgroundColor: `${color}` }} />
    </div>
);
};

export default SyncRotatingDots;