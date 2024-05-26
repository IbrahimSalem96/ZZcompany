/* eslint-disable jsx-a11y/img-redundant-alt */
import { filterList, serviceList } from "../constants/service";
import { Link } from "react-router-dom";

const Service = () => {
  return (
    <div className="container">
      <div className="serviceSection">
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
          {serviceList.slice(0, 4).map((list) => (
            <div className="boxContent" key={list.id}>
              <div className="hoverImage">
                <img src={list.bgImage} alt="Image Service" />

                <div className="bgHover"> </div>

                <Link to={`/services/${list.id}`}>Open Service</Link>
              </div>
              <p>{list.title} </p>
            </div>
          ))}
        </div>

        <div className="btnSeeMoreSrvices">
          <Link to={'/services'}>See More Srvices</Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
