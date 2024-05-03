import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import './erreur.scss';

const Erreur = () => {
  return (
    <div className="erreur">
      <Navbar />
      <div className="error-message">
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/">Retour à la page d'accueil</Link>
      </div>
    </div>
  );
};

export default Erreur;
