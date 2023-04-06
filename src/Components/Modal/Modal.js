import React from 'react';
import {IoCloseSharp} from 'react-icons/io5'
import Leaderboard from '../Leaderboard/Leaderboard';
import './Modal.css'

const Modal = ({ show, handleClose, display }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
        {display === 'leader' ?
            <Leaderboard handleClose={handleClose} />
                :
            <section className="modal-main">
                <IoCloseSharp className='close-Btn' onClick={handleClose} />
                <h2>How To Play</h2>
                <ol>
                    <li>Choose a category of sounds that you want to play with.</li>
                    <li>Choose a difficulty level that you are comfortable with.</li>
                        <ul>
                            <li>Easy: Listen to the sound 3 times</li>
                            <li>Medium: Listen to the sound 2 times</li>
                            <li>Hard: Listen to the sound 1 times</li>
                        </ul>
                    <li>After you have guessed all eight sounds, your score will be displayed.</li>
                </ol>
            </section>
        }
    </div>
  );
};

export default Modal;