'use client';

import { useEffect, useRef, useState } from 'react';
import { images } from '../asset/zunda_main'; 
import "../../App.css"

// ずんだもん表示
const Character = () => {
  const [imageIndex, setImageIndex] = useState<number>(0);
  const imageRef = useRef<HTMLImageElement>(null);

  const audio = new Audio("/greet2.wav");

  const playSound = () => {
    audio.play();
  };

  const randomImage = Math.floor(Math.random()*images.length)
  return (
    <div onClick={playSound}>
      {/* ずんだもんが選択されたら表示 */}
      <div className="background fixed bottom-5 right-10 mt-1 animate-bounce cursor-pointer"
>
        <img
          ref={imageRef}
          src={images[randomImage]}
          className="object-cover drop-shadow-lg"
          alt="zundamon"
          width={300}
          height={458}
        />
      </div>
      <div className='fixed bottom-10 left-5 animate-bounce cursor-pointer'>
      </div>
    </div>
  );
};

export default Character;
