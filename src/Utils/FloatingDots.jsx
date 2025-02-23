import React from 'react';

const FloatingDots = () => {
  return (
    <div className="fixed inset-0 z-10 pointer-events-none">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-cyan-200"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float-${Math.floor(Math.random() * 3)} ${8 + Math.random() * 10}s infinite`,
            opacity: 0.4,
            filter: 'blur(1px)',
          }}
        />
      ))}
    </div>
  );
};

export default FloatingDots;