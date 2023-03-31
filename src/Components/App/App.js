import './App.css';
import Game from '../Game/Game'
import Header from '../Header/Header';
import {Route, Routes} from 'react-router-dom'
import Category from '../Category/Category'
import Difficulty from '../Difficulty/Difficulty'
import Error404 from '../404/404'

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Category />}/>
        <Route path="/:category" element={<Difficulty />} />
        <Route path="/:category/:difficulty" element={<Game />} />
        <Route path="/404" element={<Error404 />} /> 
      </Routes>
    </div>
  );
}

export default App;
