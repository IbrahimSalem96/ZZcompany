import { Routes, Route } from "react-router-dom";
import { HomePage, ServicePage, ContactUsPage, SingelPageService } from "./page/index";
import { NavTopPage, Nav, Footer } from "./components/index";
import ScrollToTop from "./components/ScrollToTop";

import "./css/main.css";

function App() {
  return (
    <>
      <NavTopPage />
      <Nav />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/services/:id" element={<SingelPageService />} />
        <Route path="/contactUs" element={<ContactUsPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
