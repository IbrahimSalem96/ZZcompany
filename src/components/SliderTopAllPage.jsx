import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { sliderTopAllPage } from "../constants/sliderTopAllPage";

const SliderTopAllPage = () => {
  return (
    <div className="sliderTopAllPage">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 250000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        loop={true} 
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {sliderTopAllPage.map((list) => (
          <SwiperSlide key={list.id}>
            <img src={list.bgImage} alt={list.altImage} />
          </SwiperSlide>
        ))}

        {/* Add more slides as needed */}
      </Swiper>
    </div>
  );
};

export default SliderTopAllPage;
