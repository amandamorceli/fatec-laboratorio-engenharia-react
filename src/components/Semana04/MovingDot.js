import { useState } from "react";

export default function MovingDot() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  function handlePointerMove(e) {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  }

  return (
    <div
      onPointerMove={handlePointerMove}
      style={{
        position: "relative",
        width: "100vw",
        height: "500px",
      }}
      className="border-y-2 border-gray-300 my-4"
    >
      <div
        style={{
          position: "absolute",
          backgroundColor: "red",
          borderRadius: "50%",
          transform: `translate(${position.x}px, ${position.y}px)`,
          left: -10,
          top: -10,
          width: 20,
          height: 20,
        }}
      />
    </div>
  );
}
