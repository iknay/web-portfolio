import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

export default function Carousel() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image src="/assets/gp_login.png" alt="Login Page" width={1250} height={1150}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/assets/gp_homescreen.png" alt="Homescreen Page" width={1250} height={1150} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/assets/gp_slideshow.png" alt="Slideshow Page" width={1250} height={1150} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/assets/gp_allgames.png" alt="All Games Page" width={1250} height={1150} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/assets/gp_invite.png" alt="Referral Page" width={1250} height={1150} />
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
