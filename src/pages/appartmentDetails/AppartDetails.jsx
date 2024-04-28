import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import data from "../../data/data.json";
import { useParams } from "react-router-dom";
import "./apartDetails.scss";

const AppartDetails = () => {
  const { id } = useParams();
  const announcement = data.find((item) => item.id === id);

  if (!announcement) {
    return <div>Appartement introuvable</div>;
  }

  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [isEquipmentOpen, setIsEquipmentOpen] = useState(false);

  const toggleDescription = () => {
    setIsDescriptionOpen(!isDescriptionOpen);
  };

  const toggleEquipment = () => {
    setIsEquipmentOpen(!isEquipmentOpen);
  };

  return (
    <div className="home">
      <Navbar />

      <div className="announcement-details">
        <div className="image-container">
          <img src={announcement.cover} alt={announcement.title} />
        </div>

        <div className="content">
          <div className="top">
            <h2>{announcement.title}</h2>
            <p>{announcement.location}</p>
          </div>
          <div className="tags">
            {announcement.tags.map((tag, index) => (
              <span key={index}>{tag}</span>
            ))}
          </div>

          <div className="down">
  <div className="description-dropdown">
    <div className="content">
      <p>Description</p>
      <span>
        <FaChevronDown
          onClick={toggleDescription}
          className={`dropdown-icon ${isDescriptionOpen ? 'open' : 'closed'}`}
        />
      </span>
    </div>
    {isDescriptionOpen && <span>{announcement.description}</span>}
  </div>

  <div className="equipment-dropdown">
    <div className="content">
      <p>Equipement</p>
      <span>
        <FaChevronDown
          onClick={toggleEquipment}
          className={`dropdown-icon ${isEquipmentOpen ? 'open' : 'closed'}`}
        />
      </span>
    </div>
    {isEquipmentOpen && (
      <ul>
        {announcement.equipments.map((equipment, index) => (
          <li key={index}>{equipment}</li>
        ))}
      </ul>
    )}
  </div>
</div>

        </div>
      </div>
    </div>
  );
};

export default AppartDetails;
