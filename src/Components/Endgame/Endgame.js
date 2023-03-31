import React from "react";
import './Endgame.css'
import { Navlink } from 'react-router-dom'


function Endgame(props) {

  const updateLeaderboard = () => {
    fetch("URL", {
      method: `POST`,
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({

      })
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))
  }

  return (
    <div>
      <h2>You got props out of 8 questions correct!</h2>
      <form className="form-container">
        <input type="text" name="username" placeholder="Enter name here" required />
        <Navlink>Submit</Navlink>
      </form>
    </div>
  )
}

export default Endgame