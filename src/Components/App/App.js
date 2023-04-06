import React, { useState, createContext } from 'react';
import './App.css';
import Game from '../Game/Game';
import Header from '../Header/Header';
import {Route, Routes, Navigate} from 'react-router-dom';
import Category from '../Category/Category';
import Difficulty from '../Difficulty/Difficulty';
import ErrorDisplay from '../ErrorDisplay/ErrorDisplay';


export const gameContext = createContext()
export const setGameContext = createContext()

function App() {
  const [gameEnded, setGameEnded] = useState(false)

  return (
    <gameContext.Provider value={gameEnded}>
      <setGameContext.Provider value={setGameEnded}>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Category />}/>
            <Route path="/:category" element={<Difficulty />} />
            <Route path="/:category/:difficulty" element={<Game />} />
            <Route path="/404" element={<ErrorDisplay errorCode="404" />} />
        <Route path="*" element={<Navigate replace to="404"/>}/>
          </Routes>
        </div>
      </setGameContext.Provider>
    </gameContext.Provider>
  );
}

export default App;
