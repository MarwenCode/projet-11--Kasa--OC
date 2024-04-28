import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import data from "../../data/data.json";
import { Link } from 'react-router-dom';
import './home.scss';

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <Header />

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
    </div>
  );
};

export default Home;
