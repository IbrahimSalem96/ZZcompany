// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation"; // Import navigation styles
import "swiper/css/pagination";


import { serviceList } from "../constants/service";
import { useParams } from "react-router-dom";

  
const SomeofOurProjects = () => {
  const { id } = useParams();
  const service = serviceList.find((item) => item.id.toString() === id);

  if (!service) {
    return <p>Service not found</p>;
  }

  return (
    <div className="container">
      <div className="someofOurProjects">
        <h3>Some of our projects</h3>
        <p>
          We provide you with some of the projects that we have presented to our
          clients:
        </p>
        <div className="projectShow">
          <Swiper
            slidesPerView={4}
            spaceBetween={10}
            loop={true}
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
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            className="mySwiper"
          >
            {service.someOfOurProjects.map((image, index) => (
              <SwiperSlide key={index}>
                <img src={image} alt={service.title} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SomeofOurProjects;
