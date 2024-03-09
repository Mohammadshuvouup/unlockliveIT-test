import React from 'react';
import { Swiper} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { FreeMode, Pagination,Autoplay, EffectFade } from 'swiper/modules';

const Slider = (props) =>{
    const {slidesPerView,
        spaceBetween,
        pagination,
        sliderClass,
        centeredSlides,
        speed,
        autoHeight} = props;
    return (
        <>
          <Swiper
            slidesPerView={slidesPerView}
            spaceBetween={spaceBetween}
            speed={speed}
            autoHeight={autoHeight}
            pagination={pagination}
            centeredSlides ={centeredSlides}
            modules={[FreeMode, Pagination,Autoplay, EffectFade]}
            className={`${sliderClass}`}
          >
            {props.children}
            
          </Swiper>
        </>
      );
}
export default Slider;