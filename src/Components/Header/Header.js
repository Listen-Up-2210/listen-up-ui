import React, {useState} from "react";
import ReactDOM from 'react-dom'
import "./Header.css"

function Modal(props) {
  return ReactDOM.createPortal(
    <div id="modal-root" className="modal">
      <div className="modal-content">
        {props.children}
      </div>
    </div>,
    document.getElementById('modal-root')
  );
}

export default function Header() {

  const[showModal, setShowModal] = useState(false)

  const handleOpenModal = () => {
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  return (
    <h1 className='header'>
      <p className='title'>Listen Up!</p>
      <div>
        <button className='modal-buttons' onClick={handleOpenModal}>Information</button>
        {showModal && 
        <Modal>
          <h2>Hello</h2>  
          <button onClick={handleCloseModal}>Close Modal</button>
        </Modal>}
        <button className='modal-buttons'>Leaderboard</button>
      </div>
    </h1>

  )
}