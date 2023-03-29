import './App.css';
import Header from '../Header/Header';
import {Route, Routes} from 'react-router-dom'
import Question from '../Question/Question';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<h1>category component</h1>}/>
        <Route path=':category' element={<h1>difficulty component</h1>} />
        <Route path=':category/:difficulty' element={<h1>option component</h1>} />
        <Route path=':category/:difficulty/play' element={<Question />} />
      </Routes>
    </div>
  );
}

export default App;
