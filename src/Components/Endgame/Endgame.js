import React from "react";
import './Endgame.css'
import { Navlink } from "react"

function Endgame() {

  return (
    <div>
      <h2>You got props out of 8 questions correct!</h2>
      <form className="form-container">
        <input type="text" name="username" placeholder="Enter name here" required />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Endgame