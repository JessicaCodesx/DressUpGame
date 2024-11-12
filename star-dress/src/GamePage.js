import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './GamePage.css';
import gameBackground from './assets/img/gamebackground.jpg';
import baseCharacter from './assets/img/basecharacterone.png';
import icon from './assets/img/icon.jpg';
import shirt1 from './assets/img/shirts/shirt1.png';
import shirt2 from './assets/img/shirts/shirt2.png';
import shirt3 from './assets/img/shirts/shirt3.png';
import shirt4 from './assets/img/shirts/shirt4.png';
import shirt5 from './assets/img/shirts/shirt5.png';
import shirt6 from './assets/img/shirts/shirt6.png';
import shirt7 from './assets/img/shirts/shirt7.png';
import shirt8 from './assets/img/shirts/shirt8.png';
import shirt9 from './assets/img/shirts/shirt9.png';
import shirt10 from './assets/img/shirts/shirt10.png';
import shirtSwapBtn from './assets/img/shirtswapbtn.png';
import pantsSwapBtn from './assets/img/pantswapbtn.png';
import accessorySwapBtn from './assets/img/accessoryswapbtn.png';
import petSwapBtn from './assets/img/petswapbtn.png';
import shoeSwapBtn from './assets/img/shoeswapbtn.png';
import earringSwapBtn from './assets/img/earringswapbtn.png';

// array of shirt images including the default `null` for no shirt
const shirts = [null, shirt1, shirt2, shirt3, shirt4, shirt5, shirt6, shirt7, shirt8, shirt9, shirt10]; // Add remaining shirts as needed

const GamePage = () => {
  const navigate = useNavigate();
  const [shirtIndex, setShirtIndex] = useState(0);

  const handleShirtCycle = () => {
    setShirtIndex((prev) => (prev + 1) % shirts.length);
  };

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div
      className="game-page"
      style={{ backgroundImage: `url(${gameBackground})` }}
    >
      {/* Title Icon */}
      <img src={icon} alt="Title Icon" className="title-icon" />

      {/* Back Button */}
      <button onClick={handleBackClick} className="back-button">
        BACK
      </button>

      {/* Shadow (Dark Grey Oval) */}
      <div className="shadow"></div>

      {/* Base Character Image */}
      <img src={baseCharacter} alt="Base Character" className="base-character" />

      {/* Conditional Shirt Overlay */}
      {shirts[shirtIndex] && (
        <img
          src={shirts[shirtIndex]}
          alt="Current Shirt"
          className="shirt-overlay"
        />
      )}

      {/* Left Side Buttons */}
      <img
        src={shirtSwapBtn}
        alt="Cycle Shirts"
        onClick={handleShirtCycle}
        className="cycle-button cycle-button-left cycle-shirts"
      />
      <img
        src={pantsSwapBtn}
        alt="Cycle Pants Placeholder"
        className="cycle-button cycle-button-left cycle-pants"
      />
      <img
        src={earringSwapBtn}
        alt="Cycle Earrings Placeholder"
        className="cycle-button cycle-button-left cycle-earrings"
      />

      {/* Right Side Buttons */}
      <img
        src={accessorySwapBtn}
        alt="Cycle Accessories Placeholder"
        className="cycle-button cycle-button-right cycle-accessories"
      />
      <img
        src={petSwapBtn}
        alt="Cycle Pets Placeholder"
        className="cycle-button cycle-button-right cycle-pets"
      />
      <img
        src={shoeSwapBtn}
        alt="Cycle Shoes Placeholder"
        className="cycle-button cycle-button-right cycle-shoes"
      />
    </div>
  );
};

export default GamePage;
