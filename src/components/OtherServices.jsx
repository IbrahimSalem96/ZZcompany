// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

import { serviceList } from "../constants/service";
import { Link } from "react-router-dom";

const OtherServices = () => {
  return (
    <div className="container">
      <div className="otherServices">
        <h3>Other services</h3>
        <p>You can browse the other services section</p>

        <div className="sliderServices">
          <>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {serviceList.map((list) => (
                <SwiperSlide>
                  <div className="boxContent" key={list.id}>
                    <div className="hoverImage">
                      <img src={list.bgImage} alt={list.title} />

                      <div className="bgHover"> </div>

                      <Link to={`/services/${list.id}`}>Open Service</Link>
                    </div>
                    <p>{list.title}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        </div>
      </div>
    </div>
  );
};

export default OtherServices;
