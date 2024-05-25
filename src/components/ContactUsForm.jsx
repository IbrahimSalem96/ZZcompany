import { useState } from "react";
import {serviceList} from '../constants/service'

const ContactUsForm = () => {
    const [listServices, setListServices] = useState(false);
    const [selectedService, setSelectedService] = useState("");

    const handleShowList = () => {
        setListServices(!listServices);
    }

    const handleSelectService = (service) => {
        setSelectedService(service);
        setListServices(false);
    }

    return (
        <div className="container">
            <div className="contactUsForm">
                <h3>Contact Us</h3>

                <div className="formContactUs">
                    <div className="inputField">
                        <div className="label">
                            <label>First Name :</label>
                            <input type="text" placeholder="Ahmad"/>
                        </div>

                        <div className="label">
                            <label>Second Name :</label>
                            <input type="text" placeholder="Ahmad"/>
                        </div>
                    </div>

                    <div className="inputField">
                        <div className="label">
                            <label>Email :</label>
                            <input type="text" placeholder="ahmadbassam@gmail.com"/>
                        </div>

                        <div className="label">
                            <label>Services : </label>
                            <input type="text" placeholder="Website Design Service" readOnly value={selectedService} onClick={handleShowList}/>
                            <ul style={{ display: listServices ? 'block' : 'none' }}>
                                {serviceList.map(list => (
                                <li key={list.id} onClick={() => handleSelectService(`${list.title}`)}>{list.title}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="inputFieldTextarea">
                        <div className="labelTextarea">
                            <label>Write your request in bullet points Ensure all details are clear</label>
                            <textarea></textarea>
                        </div>
                    </div>

                    <div className="btnSubmitRequest">
                        <a href="#">Submit Request</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUsForm;
