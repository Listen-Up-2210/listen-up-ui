import React from 'react';
import './App.css';
import Game from '../Game/Game'
import Header from '../Header/Header';
import {Route, Routes} from 'react-router-dom'
import Question from '../Question/Question';
import Category from '../Category/Category'
import Difficulty from '../Difficulty/Difficulty'
import ErrorDisplay from '../ErrorDisplay/ErrorDisplay'
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const gameContext = React.createContext('false')

function App() {
  let location = useLocation();
  console.log(location)
  // const [gameEnded, setGameEnded] = useState(false)
  const gameState = false

  return (
    <gameContext.Provider value={gameState}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Category />}/>
          <Route path="/:category" element={<Difficulty />} />
          <Route path="/:category/:difficulty" element={<Game />} />
          <Route path="/404" element={<ErrorDisplay errorCode="404" />} /> 
        </Routes>
      </div>
    </gameContext.Provider>
  );
}

export default App;
