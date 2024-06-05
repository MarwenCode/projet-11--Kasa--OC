import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import data from "../../data/data.json";
import './home.scss';
import { Card } from '../../components/card/Card';

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <Header imageUrl="/assets/sea.png"  showText={true} />
     <Card data={data} />
 
   
    </div>
  );
};

export default Home;
