import { filterList, serviceList } from "../constants/service";
import { SliderTopAllPage } from "../components/index";
import { Link } from "react-router-dom";

const ServicePage = () => {
  return (
    <>
      <SliderTopAllPage />
      <div className="container">
        <div className="serviceSection" style={{ paddingBottom: "30px" }}>
          <h3>SERVICES</h3>
          <p>We offer you some of the services that we donate to provide:</p>

          <div className="filterLable">
            {filterList.map((list) => (
              <p key={list.id} style={{ backgroundColor: list.color }}>
                {list.filterName}
              </p>
            ))}
          </div>

          <div className="cardService">
            {serviceList.map((list) => (
              <div className="boxContent" key={list.id}>
                <div className="hoverImage">
                  <img src={list.bgImage} alt={list.title}/>

                  <div className="bgHover"> </div>

                  <Link to={`/services/${list.id}`}>Open Service</Link>
                </div>
                <p>{list.title} </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicePage;
