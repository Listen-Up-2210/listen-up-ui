import React from 'react';
import './App.css';
import Game from '../Game/Game';
import Header from '../Header/Header';
import {Route, Routes, Navigate} from 'react-router-dom';
import Category from '../Category/Category';
import Difficulty from '../Difficulty/Difficulty';
import ErrorDisplay from '../ErrorDisplay/ErrorDisplay';
import Context from '../Context/Context';

function App() {
  
  return (
    <Context>
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
    </Context>
  );
}

export default App;
