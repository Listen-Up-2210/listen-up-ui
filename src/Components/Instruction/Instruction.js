import React, {useState} from "react";
import ReactDOM from 'react-dom'

export default function Instruction(props) {
  return ReactDOM.createPortal(
    <div id="modal-root" className="modal">
      <div className="modal-content">
        {props.children}
      </div>
    </div>,
    document.getElementById('modal-root')
  );
}