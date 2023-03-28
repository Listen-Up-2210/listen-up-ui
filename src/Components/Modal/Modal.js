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
                <h2>Instruction Content</h2>
                <p>This is the content of the modal.</p>
                <button onClick={handleClose}>Close</button>
            </section>
        }
    </div>
  );
};

export default Modal;