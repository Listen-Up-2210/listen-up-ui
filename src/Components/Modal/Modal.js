import React from 'react';
import './Modal.css'

const Modal = ({ show, handleClose, display }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
        {display === 'leader' ?
            <section className="modal-main">
                <h2>Leaderboard Content</h2>
                <p>This is the content of the modal.</p>
                <button onClick={handleClose}>Close</button>
            </section>
                :
            <section className="modal-main">
                <h2>Instructions</h2>
                <p>To play the game, click the play button to hear a sound and then select one of the four choices provided to submit your guess. There are eight questions a game. Good luck!</p>
                <button onClick={handleClose}>Close</button>
            </section>
        }
    </div>
  );
};

export default Modal;