// src/GamePage.js
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './styles/GamePage.css';
import gameBackground from './assets/img/backgrounds/gamebackground.jpg';
import doneBackground from './assets/img/backgrounds/donebackground.jpg';
import cameraClickSound from './assets/audio/camera_click.mp3';
import mouseClickSound from './assets/audio/mouse_click.mp3';
import characterOne from './assets/img/characters/characterone.png';
import characterTwo from './assets/img/characters/charactertwo.png';
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
import pants1 from './assets/img/pants/pants1.png';
import pants2 from './assets/img/pants/pants2.png';
import pants3 from './assets/img/pants/pants3.png';
import pants4 from './assets/img/pants/pants4.png';
import pants5 from './assets/img/pants/pants5.png';
import pants6 from './assets/img/pants/pants6.png';
import pants7 from './assets/img/pants/pants7.png';
import pants8 from './assets/img/pants/pants8.png';
import pants9 from './assets/img/pants/pants9.png';
import pants10 from './assets/img/pants/pants10.png';
import shoes1 from './assets/img/shoes/shoes1.png';
import shoes2 from './assets/img/shoes/shoes2.png';
import shoes3 from './assets/img/shoes/shoes3.png';
import shoes4 from './assets/img/shoes/shoes4.png';
import shoes5 from './assets/img/shoes/shoes5.png';
import shoes6 from './assets/img/shoes/shoes6.png';
import shoes7 from './assets/img/shoes/shoes7.png';
import shoes8 from './assets/img/shoes/shoes8.png';
import earrings1 from './assets/img/earrings/earring1.png';
import earrings2 from './assets/img/earrings/earring2.png';
import earrings3 from './assets/img/earrings/earring3.png';
import earrings4 from './assets/img/earrings/earring4.png';
import earrings5 from './assets/img/earrings/earring5.png';
import earrings6 from './assets/img/earrings/earring6.png';
import pet1 from './assets/img/pets/pet1.png';
import pet2 from './assets/img/pets/pet2.png';
import pet3 from './assets/img/pets/pet3.png';
import pet4 from './assets/img/pets/pet4.png';
import accessory1 from './assets/img/accessories/accessory1.png';
import accessory2 from './assets/img/accessories/accessory2.png';
import accessory3 from './assets/img/accessories/accessory3.png';
import accessory4 from './assets/img/accessories/accessory4.png';
import accessory5 from './assets/img/accessories/accessory5.png';

import cloud1 from './assets/img/effects/cloud1.png';
import cloud2 from './assets/img/effects/cloud2.png';
import cloud3 from './assets/img/effects/cloud3.png';
import cloudb1 from './assets/img/effects/cloudb1.png';
import cloudb2 from './assets/img/effects/cloudb2.png';
import cloudb3 from './assets/img/effects/cloudb3.png';
import star1 from './assets/img/effects/star1.png';
import star2 from './assets/img/effects/star2.png';
import star3 from './assets/img/effects/star3.png';

import shirtSwapBtn from './assets/img/buttons/shirtswapbtn.png';
import pantsSwapBtn from './assets/img/buttons/pantswapbtn.png';
import accessorySwapBtn from './assets/img/buttons/accessoryswapbtn.png';
import petSwapBtn from './assets/img/buttons/petswapbtn.png';
import shoeSwapBtn from './assets/img/buttons/shoeswapbtn.png';
import earringSwapBtn from './assets/img/buttons/earringswapbtn.png';

// Arrays for clothing and accessory items
const shirts = [null, shirt1, shirt2, shirt3, shirt4, shirt5, shirt6, shirt7, shirt8, shirt9, shirt10];
const pants = [null, pants1, pants2, pants3, pants4, pants5, pants6, pants7, pants8, pants9, pants10];
const shoes = [null, shoes1, shoes2, shoes3, shoes4, shoes5, shoes6, shoes7, shoes8];
const earrings = [null, earrings1, earrings2, earrings3, earrings4, earrings5, earrings6];
const pets = [null, pet1, pet2, pet3, pet4];
const accessories = [null, accessory1, accessory2, accessory3, accessory4, accessory5];

const GamePage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Determine selected character based on query parameter
  const selectedCharacter = new URLSearchParams(location.search).get('character');
  const baseCharacter = selectedCharacter === 'charactertwo' ? characterTwo : characterOne;

  // State variables for selected items
  const [shirtIndex, setShirtIndex] = useState(0);
  const [pantsIndex, setPantsIndex] = useState(0);
  const [shoesIndex, setShoesIndex] = useState(0);
  const [earringsIndex, setEarringsIndex] = useState(0);
  const [petsIndex, setPetsIndex] = useState(0);
  const [accessoriesIndex, setAccessoriesIndex] = useState(0);

  const [isDone, setIsDone] = useState(false); // Tracks if "Done" is clicked

  // Play sound function
  const playMouseClickSound = () => {
    const audio = new Audio(mouseClickSound);
    audio.play();
  };

  // Handlers for cycling through items with sound effect
  const handleShirtCycle = () => {
    playMouseClickSound();
    setShirtIndex((prev) => (prev + 1) % shirts.length);
  };

  const handlePantsCycle = () => {
    playMouseClickSound();
    setPantsIndex((prev) => (prev + 1) % pants.length);
  };

  const handleShoesCycle = () => {
    playMouseClickSound();
    setShoesIndex((prev) => (prev + 1) % shoes.length);
  };

  const handleEarringsCycle = () => {
    playMouseClickSound();
    setEarringsIndex((prev) => (prev + 1) % earrings.length);
  };

  const handlePetsCycle = () => {
    playMouseClickSound();
    setPetsIndex((prev) => (prev + 1) % pets.length);
  };

  const handleAccessoriesCycle = () => {
    playMouseClickSound();
    setAccessoriesIndex((prev) => (prev + 1) % accessories.length);
  };

  const handleDoneClick = () => {
    const audio = new Audio(cameraClickSound);
    audio.play(); // Play the camera click sound
    setIsDone(true);
  };

  const handleReplayClick = () => navigate('/');
  const handleBackClick = () => navigate('/');

  return (
    <div
      className={`game-page ${isDone ? 'photo-frame' : ''}`}
      style={{
        backgroundImage: `url(${isDone ? doneBackground : gameBackground})`,
      }}
    >
      {/* Title Icon */}
      <img src={icon} alt="Title Icon" className="title-icon" />

      {/* Always render character and overlays, regardless of isDone */}
      <img src={baseCharacter} alt="Base Character" className="base-character" />
      {shirts[shirtIndex] && <img src={shirts[shirtIndex]} alt="Current Shirt" className="shirt-overlay" />}
      {pants[pantsIndex] && <img src={pants[pantsIndex]} alt="Current Pants" className="pants-overlay" />}
      {shoes[shoesIndex] && <img src={shoes[shoesIndex]} alt="Current Shoes" className="shoes-overlay" />}
      {earrings[earringsIndex] && <img src={earrings[earringsIndex]} alt="Current Earrings" className="earrings-overlay" />}
      {pets[petsIndex] && <img src={pets[petsIndex]} alt="Current Pet" className="pet-overlay" />}
      {accessories[accessoriesIndex] && <img src={accessories[accessoriesIndex]} alt="Current Accessory" className="accessory-overlay" />}

      {!isDone && (
        <>
          {/* Back Button */}
          <button onClick={handleBackClick} className="back-button">BACK</button>

          {/* Customization Buttons */}
          <img src={shirtSwapBtn} alt="Cycle Shirts" onClick={handleShirtCycle} className="cycle-button cycle-button-left cycle-shirts" />
          <img src={pantsSwapBtn} alt="Cycle Pants" onClick={handlePantsCycle} className="cycle-button cycle-button-left cycle-pants" />
          <img src={earringSwapBtn} alt="Cycle Earrings" onClick={handleEarringsCycle} className="cycle-button cycle-button-left cycle-earrings" />
          <img src={accessorySwapBtn} alt="Cycle Accessories" onClick={handleAccessoriesCycle} className="cycle-button cycle-button-right cycle-accessories" />
          <img src={petSwapBtn} alt="Cycle Pets" onClick={handlePetsCycle} className="cycle-button cycle-button-right cycle-pets" />
          <img src={shoeSwapBtn} alt="Cycle Shoes" onClick={handleShoesCycle} className="cycle-button cycle-button-right cycle-shoes" />

          {/* Done Button */}
          <button onClick={handleDoneClick} className="done-button">DONE</button>
        </>
      )}

      {isDone && (
        <>
          {/* Animated Clouds */}
          {[...Array(10)].map((_, i) => (
            <React.Fragment key={i}>
              <img src={cloud1} alt="Cloud" className={`cloud cloud1 cloud-${i}`} />
              <img src={cloud2} alt="Cloud" className={`cloud cloud2 cloud-${i}`} />
              <img src={cloud3} alt="Cloud" className={`cloud cloud3 cloud-${i}`} />
              <img src={cloudb1} alt="Background Cloud" className={`cloud cloudb1 cloud-${i}`} />
              <img src={cloudb2} alt="Background Cloud" className={`cloud cloudb2 cloud-${i}`} />
              <img src={cloudb3} alt="Background Cloud" className={`cloud cloudb3 cloud-${i}`} />
            </React.Fragment>
          ))}

          {/* Flashing Stars */}
          {[...Array(20)].map((_, i) => (
            <React.Fragment key={i}>
              <img src={star1} alt="Star" className={`star star1 star-${i}`} />
              <img src={star2} alt="Star" className={`star star2 star-${i}`} />
              <img src={star3} alt="Star" className={`star star3 star-${i}`} />
            </React.Fragment>
          ))}

          {/* Replay Button in Photo Frame Mode */}
          <button onClick={handleReplayClick} className="replay-button">REPLAY</button>
        </>
      )}
    </div>
  );
};

export default GamePage;
