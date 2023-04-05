import React, {useState, useEffect, useContext} from "react";
import {useLocation} from 'react-router-dom'
import "./Header.css"
import Modal from "../Modal/Modal";
import instructionIcon from "../../instructions-icon.png"
import leaderboardIcon from "../../leaderboard-icon.png"
import { gameContext, setGameContext } from '../App/App';

export default function Header() {
    const [showModal, setShowModal] = useState(undefined);
    const [modalContent, setModalContent] = useState('')

    let location = useLocation()
    const gameEnded = useContext(gameContext)
    const setGameEnded = useContext(setGameContext)


    useEffect(()=>{
      if(gameEnded){
        setModalContent("leader")
        setGameEnded(false)
      }
      setShowModal(location.pathname === "/")
    },[gameEnded])

    const handleShowModal = (content) => {
      setShowModal(true);
      setModalContent(content)
    };

    const handleCloseModal = () => {
      setShowModal(false);
    };

  return (
    <header className='header'>
      <h1 className='title'>Listen Up!</h1>
      <div className='modal-icons-container'>
        <img src={instructionIcon} alt="instructions" className='modal-button' onClick={e => handleShowModal("value")}/>
        <img src={leaderboardIcon} alt="leaderboard" className='modal-button' onClick={e => handleShowModal("leader")}/>
        <Modal show={showModal} handleClose={handleCloseModal} display={modalContent} />
      </div>
    </header>
  )
}