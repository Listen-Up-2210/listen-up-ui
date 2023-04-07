import React, {useState, useEffect, useContext} from "react";
import {useLocation, Link} from 'react-router-dom'
import "./Header.css"
import Modal from "../Modal/Modal";
import instructionIcon from "../../instructions-icon.png"
import leaderboardIcon from "../../leaderboard-icon.png"
import darkModeIcon from "../../icons8-day-and-night-100.png"
import logoIcon from "../../icons8-headphones-64.png"
import { gameContext, setGameContext } from '../Context/Context';

export default function Header() {

    const [showModal, setShowModal] = useState(undefined);
    const [modalContent, setModalContent] = useState('')
    const [darkMode, setDarkMode] = useState('light')

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

    const handleToggleDarkMode = () => {
      if(darkMode==='light'){
        document.documentElement.setAttribute('data-theme', 'dark')
        setDarkMode('dark')
      } else {
        document.documentElement.setAttribute('data-theme', 'light')
        setDarkMode('light')
      }
      console.log(document.documentElement.attributes)
    }

  return (
    <header className={'header'}>
      <Link to="/">
        <section className="title-container">
          <img src={logoIcon} />
          <h1 className="title">Listen Up!</h1>
        </section>
      </Link>
      <div className='modal-icons-container'>
        <img src={darkModeIcon} alt="dark mode" className='modal-button' onClick={e => handleToggleDarkMode()}/>
        <img src={instructionIcon} alt="instructions" className='modal-button' onClick={e => handleShowModal("value")}/>
        <img src={leaderboardIcon} alt="leaderboard" className='modal-button' onClick={e => handleShowModal("leader")}/>
        <Modal show={showModal} handleClose={handleCloseModal} display={modalContent} />
      </div>
    </header>
  )
}