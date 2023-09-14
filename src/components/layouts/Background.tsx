import { Swiper, SwiperSlide } from 'swiper/react';
import { images_slider } from '../asset/zunda_slider';

export default () => {
  const randomImage = Math.floor(Math.random() * images_slider.length);

  return (
    <div>
      <SwiperSlide>
        <img
          src={images_slider[randomImage]}
          className="object-cover drop-shadow-lg"
        />
      </SwiperSlide>
    </div>
  );
};


