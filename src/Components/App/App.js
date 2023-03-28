
import './App.css';
import {Route, Routes} from 'react-router-dom'
import Question from '../Question/Question';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<h1>category component</h1>}/>
        <Route path=':category' element={<h1>difficulty component</h1>} />
        <Route path=':category/:difficulty' element={<h1>option component</h1>} />
        <Route path='/question' element={<Question />} />
      </Routes>
    </div>
  );
}

export default App;
