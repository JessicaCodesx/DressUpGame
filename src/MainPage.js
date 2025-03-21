import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/MainPage.css';
import background from './assets/img/backgrounds/background.jpg';
import icon from './assets/img/icon.jpg';

const MainPage = ({ startMusic }) => {
  const navigate = useNavigate();

  const handlePlayClick = () => {
    startMusic(); 
    navigate('/select'); 
  };

  return (
    <div
      className="main-page"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      {/* Title Icon */}
      <img src={icon} alt="Title Icon" className="title-icon" />

      {/* New Pulsing Play Button */}
      <button onClick={handlePlayClick} className="play-button">
        PLAY
      </button>
    </div>
  );
};

export default MainPage;
