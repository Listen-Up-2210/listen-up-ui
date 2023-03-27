import React, {useState} from "react";
import ReactDOM from 'react-dom'

export default function Leaderboard(props) {
  return ReactDOM.createPortal(
    <div id="modal-root" className="modal">
      <div className="modal-content">
        {props.children}
      </div>
    </div>,
    document.getElementById('modal-root')
  );
}