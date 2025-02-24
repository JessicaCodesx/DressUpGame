import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';
import SelectionPage from './SelectionPage';
import GamePage from './GamePage';
import backgroundMusic from './assets/audio/background_music.mp3';

function App() {
  const audioRef = useRef(null);

  const startMusic = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current.play().catch((error) => {
        console.log("Error starting music:", error);
      });
    }
  };

  return (
    <Router>
      {/* Background Music (persistent) */}
      <audio ref={audioRef} src={backgroundMusic} loop />

      <Routes>
        {/* Pass startMusic to MainPage */}
        <Route path="/" element={<MainPage startMusic={startMusic} />} />
        <Route path="/select" element={<SelectionPage/>}/>
        <Route path="/game" element={<GamePage />} />
      </Routes>
    </Router>
  );
}

export default App;
