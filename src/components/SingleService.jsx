import { serviceList } from "../constants/service";
import { useParams } from 'react-router-dom';

const SingleService = () => {
  const { id } = useParams();
  const service = serviceList.find((item) => item.id.toString() === id);
  
  if (!service) {
    return <p>Service not found</p>;
  }

  return (
    <div className="container">
      <div className="singleService">
        <div className="boxcontent">
          <img src={service.bgImage} alt="image service " />
        </div>
        <div className="boxcontent">
          <p>Home / Services</p>
          <div key={service.id}>
            <h1>{service.titleSinglePage}</h1>
            <ul>
              {service.serviceDescriptionPoints.map((point, index) => (
                <li key={index + 1}>{point}</li>
              ))}
            </ul>
          </div>

          <div className="btnSubmit">
            <a href="#">Order now</a>
            <a href="#">Contact us now</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
