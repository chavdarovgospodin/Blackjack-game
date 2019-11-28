import React, { useRef } from 'react';

require('./Canvas.scss');

const Canvas = () => {
  const canvasRef = useRef(null);
  return (
    <div className="canvas">
      <h1>Title</h1>
      <canvas
        ref={canvasRef}
        width={1024}
        height={640}
        onClick={e => {
          const canvas = canvasRef.current;
          const ctx = canvas.getContext('2d');
          console.log(ctx);
        }}
      />
    </div>
  );
};

export default Canvas;
