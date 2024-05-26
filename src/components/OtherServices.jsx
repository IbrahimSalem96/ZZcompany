import { serviceList } from "../constants/service";
import { Link } from 'react-router-dom'

const OtherServices = () => {
  return (
    <div className="container">
      <div className="otherServices">
        <h3>Other services</h3>
        <p>You can browse the other services section</p>

        <div className="sliderServices">
          {serviceList.map((list) => (
            <div className="boxContent" key={list.id}>
              <div className="hoverImage">
                <img src={list.bgImage} alt={list.title} />

                <div className="bgHover"> </div>

                <Link to={`/services/${list.id}`}>Open Service</Link>
              </div>
              <p>{list.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OtherServices;
