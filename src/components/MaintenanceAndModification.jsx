import {maintenanceAndModificationList} from "../constants/maintenanceAndModification";

const MaintenanceAndModification = () => {
  return (
    <div className="container">
      <div className="maintenanceAndModification">
        <h3>Maintenance and Modification Services</h3>
        <p>
          We offer you the Gold Maintenance and Modification Service for 12
          months
        </p>

        <div className="boxContent">
          <div className="priceAfterDiscount">
            <p>The price after discount is %50</p>
          </div>
          <div className="boxListServices">
            {maintenanceAndModificationList.map((list) => (
              <div className="listContent" key={list.id}>
                <img src={list.icon} alt="image list maintenance and modification" />
                <p>{list.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaintenanceAndModification;
