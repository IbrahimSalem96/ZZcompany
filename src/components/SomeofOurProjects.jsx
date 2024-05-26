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
          {service.someOfOurProjects.map((image, index) => (
            <img src={image} alt="image project " key={index + 1} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SomeofOurProjects;
