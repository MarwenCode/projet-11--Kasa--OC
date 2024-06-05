
import React from 'react';
import "./header.scss";

const Header = ({ imageUrl, showText }) => {
  return (
    <div className='header' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(10, 20, 20, 0.7)), url(${imageUrl})` }}>
       {showText && (
        <h1>
          <span>Chez vous,</span> <span>partout et ailleurs</span>
        </h1>
      )}
    </div>
  );
}

export default Header;

