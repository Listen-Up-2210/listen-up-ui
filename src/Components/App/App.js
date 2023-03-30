import './App.css';
import Game from '../Game/Game'
import Header from '../Header/Header';
import {Route, Routes} from 'react-router-dom'
import Category from '../Category/Category'
import Difficulty from '../Difficulty/Difficulty'

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Category />}/>
        <Route path='/:category' element={<Difficulty />} />
        <Route path='/:category/:difficulty' element={<h1>option component</h1>} />
      </Routes>
    </div>
  );
}

export default App;
