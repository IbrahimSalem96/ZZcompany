import logo from "../assets/logoCompany.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container footerFlex">
        <div className="listWidth logoFooter">
          <img src={logo} alt="Logo Company footer" />
          <p>ZZAD Company offers you the best Services are symbolic</p>
        </div>

        <div className="listWidth listLink">
          <p>Main</p>
          <ul>
            <li>
              <a href="#">Home Page</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Sections</a>
            </li>
          </ul>
        </div>

        <div className="listWidth listLink">
          <p>Our services</p>
          <ul>
            <li>
              <a href="#">Home Page</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Sections</a>
            </li>
          </ul>
        </div>

        <div className="listWidth listLink">
          <p>Sections</p>
          <ul>
            <li>
              <a href="#">Home Page</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Sections</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyRight">
        <p>All Rights Reserved © 2024 ZdZad Company</p>
      </div>
    </div>
  );
};

export default Footer;
