import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import data from "../../data/data.json";
import { useParams } from "react-router-dom";
import Dropdown from "./Dropdown";
import Rating from "./Rating";
import { GrNext, GrPrevious } from "react-icons/gr";
import "./apartDetails.scss";
import Erreur from "../../components/erreur/Erreur";

const AppartDetails = () => {
  const { id } = useParams();
  const announcement = data.find((item) => item.id === id);



  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [isEquipmentOpen, setIsEquipmentOpen] = useState(false);

  const toggleDescription = () => {
    setIsDescriptionOpen(!isDescriptionOpen);
  };

  const toggleEquipment = () => {
    setIsEquipmentOpen(!isEquipmentOpen);
  };

  //count slider picture
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide(
      currentSlide === announcement.pictures.length - 1 ? 0 : currentSlide + 1
    );
    console.log(currentSlide);
  };

  const prevSlide = () => {
    setCurrentSlide(
      currentSlide === 0 ? announcement.pictures.length - 1 : currentSlide - 1
    );
    console.log(currentSlide);
  };

  return (
    <div className="home">
      {announcement ? (
        <>
          <Navbar />

          <div className="announcement-details">
            <div className="image-container">
              <img
                src={announcement.pictures[currentSlide]}
                alt={announcement.title}
              />

              <div className="btn"> 
                <GrPrevious className="prev-btn" onClick={prevSlide} />
                <GrNext className="next-btn" onClick={nextSlide} />
              </div>
            </div>

            <div className="content">
              <div className="top">
                <div className="info">
                  <h2>{announcement.title}</h2>
                  <p>{announcement.location}</p>
                </div>

                <div className="profile">
                  <div className="top">
                    <span>{announcement.host.name}</span>
                    <img src={announcement.host.picture} />
                  </div>

                  <div className="rating">
                    <span>
                      <Rating rating={announcement.rating} />
                    </span>
                  </div>
                </div>
              </div>

              <div className="tags">
                {announcement.tags.map((tag, index) => (
                  <span key={index}>{tag}</span>
                ))}
              </div>

              <div className="down">
                <Dropdown
                  title="Description"
                  isOpen={isDescriptionOpen}
                  toggle={toggleDescription}>
                  <span>{announcement.description}</span>
                </Dropdown>

                <Dropdown
                  title="Equipement"
                  isOpen={isEquipmentOpen}
                  toggle={toggleEquipment}>
                  <ul>
                    {announcement?.equipments.map((equipment, index) => (
                      <li key={index}>{equipment}</li>
                    ))}
                  </ul>
                </Dropdown>
              </div>
            </div>
          </div>
        </>
      ) : (
        <Erreur />
      )}
    </div>
  );
};

export default AppartDetails;
