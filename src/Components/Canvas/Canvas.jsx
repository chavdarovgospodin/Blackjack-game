import React, { useRef, useEffect } from 'react';
const logo = require('../../Assets/Images/deck.png');

require('./Canvas.scss');

const Canvas = () => {
  const canvasRef = useRef(null);
  const deckImage = useRef(null);

  const DeckToDraw = (canvas, image, ctx) => {
    image.onload = () => {
      ctx.drawImage(image, 800, 0, 100, 127);
      ctx.font = '20px Courier';
      ctx.fillText('Deck', 820, 20);
    };
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const image = deckImage.current;
    const ctx = canvas.getContext('2d');
    DeckToDraw(canvas, image, ctx);
  });

  return (
    <div className="canvas">
      <h1>Blackjack</h1>
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
      <img ref={deckImage} src={logo} width="100" height="127" style={{ display: 'none' }} />
    </div>
  );
};

export default Canvas;
