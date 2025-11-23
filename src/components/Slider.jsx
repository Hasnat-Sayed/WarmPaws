import React from 'react';
import ban1 from '../assets/ban1.png'
import ban2 from '../assets/ban2.png'
import ban3 from '../assets/banner3.png'


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Slider = () => {
    return (
        <div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><img src={ban1} className='h-[250px] md:h-[500px] w-full object-cover' alt="" /></SwiperSlide>
        <SwiperSlide><img src={ban2} className='h-[250px] md:h-[500px] w-full object-cover' alt="" /></SwiperSlide>
        <SwiperSlide><img src={ban3} className='h-[250px] md:h-[500px] w-full object-cover' alt="" /></SwiperSlide>
      </Swiper>
        </div>
    );
};

export default Slider;