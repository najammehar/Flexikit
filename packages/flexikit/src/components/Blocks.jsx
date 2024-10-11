import React from "react";
import '../index.css';
import { constSize, constColor, constSecColor } from "../constant";

function Blocks({
    size = constSize * 2,
    color = constColor,
    secondaryColor = constSecColor,
    duration = '2s',
    loading = true,
}) {
    const keyframes = `
        @keyframes block {
            0% {
                top: 0; left: 0;
            }
            25% {
                top : 0; left: 50%;
            }
            50% {
                top: 50%; left: 50%;
            }
            75% {
                top: 50%; left: 0;
            }
            100% {
                top: 0; left: 0;
            }
        }
        @keyframes block2 {
            0% {
                bottom: 0; right: 0;
            }
            25% {
                bottom : 0; right: 50%;
            }
            50% {
                bottom: 50%; right: 50%;
            }
            75% {
                bottom: 50%; right: 0;
            }
            100% {
                bottom: 0; right: 0;
            }
        }
    `
    const animation = {
        animation: `block ${duration} ease-in-out infinite`,
    }
    const animation2 = {
        animation: `block2 ${duration} ease-in-out infinite`,
    }
    const blockSize = size / 2;
    return (
        <div
            className={`relative ${loading ? "block" : "hidden"}`}
            style={{ height: `${size}px`, width: `${size}px` }}
        >
            <style>{keyframes}</style>
            <div
                className="absolute top-0 left-0"
                style={{ height: `${blockSize}px`, width: `${blockSize}px`, backgroundColor: color, ...animation}}
            />
            <div
                className="absolute bottom-0 right-0"
                style={{ height: `${blockSize}px`, width: `${blockSize}px`, backgroundColor: secondaryColor, ...animation2}}
            />
        </div>
    );
}

export default Blocks;