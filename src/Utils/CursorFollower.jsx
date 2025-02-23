import React, { useEffect, useRef, useState } from "react";

const CursorFollower = () => {
  // Start both dots in the middle of the screen
  const initialPos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  const [mainDot, setMainDot] = useState(initialPos);
  const [trailDot, setTrailDot] = useState(initialPos);

  // We'll store the mouse's current position in a ref
  // so we can smoothly interpolate the trailing dot in an animation loop.
  const mousePosRef = useRef(initialPos);

  // Update main dot instantly on mouse move
  useEffect(() => {
    const handleMouseMove = (e) => {
      const newPos = { x: e.clientX, y: e.clientY };
      setMainDot(newPos);
      mousePosRef.current = newPos;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Smoothly animate the trailing dot using requestAnimationFrame
  useEffect(() => {
    let animationFrameId;
    const animateTrail = () => {
      setTrailDot((prev) => ({
        x: prev.x + (mousePosRef.current.x - prev.x) * 0.15,
        y: prev.y + (mousePosRef.current.y - prev.y) * 0.15,
      }));
      animationFrameId = requestAnimationFrame(animateTrail);
    };
    animateTrail();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <>
      {/* 
        Main Dot:
        - Smaller and sharper.
        - Uses a radial gradient from teal (#20e1b7) to blue (#0899f0).
        - Has a bright neon box shadow.
      */}
      <div
        style={{
          position: "fixed",
          width: "10px",
          height: "10px",
          background: "radial-gradient(circle, #20e1b7 0%, #0899f0 100%)",
          borderRadius: "50%",
          pointerEvents: "none",
          left: `${mainDot.x}px`,
          top: `${mainDot.y}px`,
          transform: "translate(-50%, -50%)",
          zIndex: 1000,
          boxShadow: "0 0 15px #20e1b7, 0 0 30px #0899f0",
        }}
      />

      {/* 
        Trailing Dot:
        - Larger, blurred glow with the same color gradient but transparent.
        - Lags behind smoothly with interpolation.
      */}
      <div
        style={{
          position: "fixed",
          width: "40px",
          height: "40px",
          background:
            "radial-gradient(circle, rgba(32,225,183,0.2) 0%, rgba(8,153,240,0.2) 100%)",
          borderRadius: "50%",
          pointerEvents: "none",
          left: `${trailDot.x}px`,
          top: `${trailDot.y}px`,
          transform: "translate(-50%, -50%)",
          zIndex: 999,
          filter: "blur(12px)",
          boxShadow: "0 0 30px 10px rgba(8,153,240,0.3)",
        }}
      />
    </>
  );
};

export default CursorFollower;