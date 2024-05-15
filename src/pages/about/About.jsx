import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Dropdown from "../appartmentDetails/Dropdown";
import "./about.scss";

const About = () => {
  const [isFiablite, setIsFiabliteOpen] = useState(false);
  const [isRespect, setIsRespectOpen] = useState(false);
  const [isService, setIsServiceOpen] = useState(false);
  const [isSecurite, setIsSecuriteOpen] = useState(false);

  const toggleFiablite = () => {
    setIsFiabliteOpen(!isFiablite);
  };

  const toggleRespect = () => {
    setIsRespectOpen(!isRespect);
  };
  const toggleService = () => {
    setIsServiceOpen(!isService);
  };
  const toggleSecurite = () => {
    setIsSecuriteOpen(!isSecurite);
  };

  return (
    <div className="about">
      <Navbar />
      <Header />
      <div className="dropdown-container">
        <Dropdown
          title="Fiabilité"
         
        >
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            vitae felis nec dui condimentum elementum.
          </span>
        </Dropdown>
        <Dropdown title="Respect">
          <span>
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas.
          </span>
        </Dropdown>
        <Dropdown title="Service">
          <span>
            Duis ac aliquam dui. Fusce nec lorem at risus mattis vehicula nec
            sit amet odio.
          </span>
        </Dropdown>
        <Dropdown
          title="Sécurité"
        
        >
          <span>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia Curae; Nullam pretium nisi nec efficitur convallis.
          </span>
        </Dropdown>
      </div>
    </div>
  );
};

export default About;

