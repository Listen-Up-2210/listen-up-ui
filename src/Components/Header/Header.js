import React, {useState} from "react";
import "./Header.css"
import Modal from "../Modal/Modal";
import instructionIcon from "../../instructions-icon.png"
import leaderboardIcon from "../../leaderboard-icon.png"

export default function Header() {
    const [showModal, setShowModal] = useState(true);
    const [modalContent, setModalContent] = useState('info')

    const handleShowModal = (e) => {
        setShowModal(true);
        setModalContent(e.target.value)
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

  return (
    <header className='header'>
      <h1 className='title'>Listen Up!</h1>
      <div className='modal-icons-container'>
        <img src={instructionIcon} alt="instructions" className='modal-button' onClick={e => handleShowModal(e)} value="info"/>
        <img src={leaderboardIcon} alt="leaderboard" className='modal-button' onClick={e => handleShowModal(e)} value="leader"/>
        <Modal show={showModal} handleClose={handleCloseModal} display={modalContent} />
      </div>
    </header>
  )
}