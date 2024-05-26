import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { sliderBannerHome } from "../constants/sliderBannerHome";

const SliderBannerHome = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (swiper, time, progress) => {
    if (progressCircle.current && progressContent.current) {
      const remainingTime = 1 - progress;
      const dashOffset = 126 * remainingTime;
      progressCircle.current.style.setProperty("--progress", remainingTime);
      progressCircle.current.style.strokeDashoffset = dashOffset;
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <div className="sliderBannerHome">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        loop={true} 
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {sliderBannerHome.map((slide, index) => (
          <SwiperSlide key={index}>
            <img src={slide.bgImage} alt={slide.altImage} />
          </SwiperSlide>
        ))}
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20" />
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
};

export default SliderBannerHome;
