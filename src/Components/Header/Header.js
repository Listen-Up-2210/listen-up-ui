import React, {useState} from "react";
import "./Header.css"
import Modal from "../Modal/Modal";

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
      <div>
        <button className='modalBtn' onClick={e => handleShowModal(e)} value="info">Show Info</button>
        <button className='modalBtn' onClick={e => handleShowModal(e)} value="leader">Show Leader</button>
        <Modal show={showModal} handleClose={handleCloseModal} display={modalContent} />
      </div>
    </header>
  )
}