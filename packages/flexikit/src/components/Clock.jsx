import React from 'react';
import '../index.css'
import { constColor, constSize } from '../constant'

const Clock = ({ 
  color = constColor, 
  size = constSize * 3, 
  hourHandDuration = 30,
  minuteHandDuration = 1,
  loading = true
}) => {
  const baseSize = size / 2;
  const borderWidth = Math.max(1, Math.floor(size / 40));
  const handWidth = Math.max(1, Math.floor(size / 40));
  const handHeight = baseSize * 0.4; 
  const keyframes = `
          @keyframes dialRotate {
          0% { transform: translate(-50%, -100%) rotate(0deg); }
          100% { transform: translate(-50%, -100%) rotate(360deg); }
        }`;

  return (
      <div 
      className={`relative rounded-full ${loading ? 'block' : 'hidden'}`}

      style={{
          width: `${baseSize}px`,
          height: `${baseSize}px`,
          border: `${borderWidth}px solid ${color}`,
          transform: `scale(2)`
        }}
        >
        <style>{keyframes}</style>
        <div 
        className='absolute size-[15%] rounded-full top-1/2 left-1/2' 
        style={{
          background: color,
          transform: 'translate(-50%, -50%)'
        }}
        />
      <div 
        className="absolute top-1/2 left-1/2 origin-bottom rounded-full"
        style={{
          width: `${handWidth}px`,
          height: `${handHeight}px`,
          background: color,
          transform: 'translate(-50%, -100%)',
          animation: `dialRotate ${hourHandDuration}s linear infinite`
        }}
      />
      <div 
        className="absolute top-1/2 left-1/2 origin-bottom rounded-full"
        style={{
          width: `${handWidth}px`,
          height: `${handHeight}px`,
          background: color,
          transform: 'translate(-50%, -100%)',
          animation: `dialRotate ${minuteHandDuration}s linear infinite`
        }}
      />
    </div>
  );
};

export default Clock;