import './App.css';
import Header from '../Header/Header';
import {Route, Routes} from 'react-router-dom'
import Question from '../Question/Question';
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
        <Route path=':category/:difficulty/play' element={<Question />} />
      </Routes>
    </div>
  );
}

export default App;
