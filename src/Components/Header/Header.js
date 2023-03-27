import React, {useState} from "react";
import ReactDOM from 'react-dom'
import "./Header.css"
import Instruction from "../Instruction/Instruction";
import Leaderboard from "../LeaderBoard/LeaderBoard";

// function Modal(props) {
//   return ReactDOM.createPortal(
//     <div id="modal-root" className="modal">
//       <div className="modal-content">
//         {props.children}
//       </div>
//     </div>,
//     document.getElementById('modal-root')
//   );
// }

export default function Header() {

  const[showInstruction, setShowInstruction] = useState(true)
  const[showLeaderboard, setShowLeaderboard] = useState(false)

  const handleOpenInstruction = () => {
    setShowInstruction(true)
  }

  const handleCloseInstruction = () => {
    setShowInstruction(false)
  }

  const handleOpenLeaderboard = () => {
    setShowLeaderboard(true)
  }

  const handleCloseLeaderboard = () => {
    setShowLeaderboard(false)
  }

  return (
    <h1 className='header'>
      <p className='title'>Listen Up!</p>
      <div>
        <button className='modal-buttons' onClick={handleOpenInstruction}>Information</button>
        {showInstruction && 
        <Instruction>
          <h2>Hello</h2>  
          <button onClick={handleCloseInstruction}>Close Modal</button>
        </Instruction>}
        <button className='modal-buttons' onClick={handleOpenLeaderboard}>Leaderboard</button>
        {showLeaderboard && 
        <Leaderboard>
          <h2>LeaderBoard</h2>  
          <button onClick={handleCloseLeaderboard}>Close Modal</button>
        </Leaderboard>}
      </div>
    </h1>

  )
}