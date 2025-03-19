// src/SelectionPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/SelectionPage.css';
import background from './assets/img/backgrounds/selectionbackground.jpg';
import characterOne from './assets/img/characters/characterone.png';
import characterTwo from './assets/img/characters/charactertwo.png';
import characterOneGiggle from './assets/audio/characteronegiggle.mp3';
import characterTwoGiggle from './assets/audio/charactertwogiggle.mp3';

const SelectionPage = () => {
  const navigate = useNavigate();

  const handleSelectSophie = () => {
    const audio = new Audio(characterOneGiggle);
    audio.play();
    navigate('/game?character=characterone');
  };

  const handleSelectLilah = () => {
    const audio = new Audio(characterTwoGiggle);
    audio.play();
    navigate('/game?character=charactertwo');
  };

  return (
    <div
      className="selection-page"
      style={{ backgroundImage: `url(${background})` }}
    >
      <h1 className="selection-title">Select Your Character</h1>

      <div className="character-container">
        <div className="character-background">
          <div className="character">
            <img src={characterOne} alt="Character One" className="character-image" />
            <button onClick={handleSelectSophie} className="character-button">Sophie</button>
          </div>
        </div>

        <div className="character-background">
          <div className="character">
            <img src={characterTwo} alt="Character Two" className="character-image" />
            <button onClick={handleSelectLilah} className="character-button">Lilah</button>
          </div>
        </div>
      </div>

      <button onClick={() => navigate('/')} className="back-button">BACK</button>
    </div>
  );
};

export default SelectionPage;
