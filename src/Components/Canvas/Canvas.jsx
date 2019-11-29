import React, { useRef, useEffect } from 'react';
import { Deck } from '../../Components';
import images from './images';
require('./Canvas.scss');

const logo = require('../../Assets/Images/deck.png');

console.log(images);
const Canvas = () => {
  const canvasRef = useRef(null);
  const deckImage = useRef(null);

  const DeckToDraw = (canvas, image, ctx) => {
    image.onload = () => {
      ctx.drawImage(image, 800, 0, 100, 130);
      ctx.font = '20px Courier';
      ctx.fillText('Deck', 820, 20);
    };
  };

  const HitButton = ctx => {
    ctx.beginPath();
    ctx.lineWidth = '4';
    ctx.rect(845, 575, 60, 40);
    ctx.font = '20px Courier';
    ctx.fillText('Hit', 855, 600);
    ctx.stroke();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const image = deckImage.current;
    const ctx = canvas.getContext('2d');
    DeckToDraw(canvas, image, ctx);
    HitButton(ctx);
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
