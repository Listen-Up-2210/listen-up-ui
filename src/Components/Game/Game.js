import React, { useState } from "react";
import "./Game.css"

 function Game()  {
  const [deck, setDeck] = useState([])
  const [score, setScore] = useState(0)
  const [name, setName] = useState('')

  const clearInputs = () => {
    setDeck = ''
    setScore = 0
    setName = ''
  }

  setScore = () => {
    return score ++
  }

  setName = (input) => {
    name = input
    return name
  }


  return (
    <div className="game-container">
      <h1>Hi, I'm the game component!</h1>
    </div>
  )

 }

export default Game