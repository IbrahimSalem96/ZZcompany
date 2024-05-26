import { serviceList } from "../constants/service";
import { Link, useParams } from 'react-router-dom';

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
          <img src={service.bgImage} alt={service.title} />
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
            <Link to={'/contactUs'}>Order now</Link>
            <Link to={'/contactUs'}>Contact us now</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
