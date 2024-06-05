import React from "react";
import { Link } from "react-router-dom";
import "./card.scss";

export const Card = ({ data }) => {

  console.log(data);


  return (
    <div className="announcements">
      {data.map((announcement, index) => (
        <div key={announcement.id} className="card">
          <Link to={`/apartment/${announcement.id}`}>
            <div className="image-container">
              <img src={announcement.cover} alt={announcement.title} />

              <div className="content">
                <h2>{announcement.title}</h2>
                <p>{announcement.location}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};
