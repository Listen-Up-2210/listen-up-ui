import React, { useState } from "react";
import "./Game.css"

 function Game()  {
  const [deck, setDeck] = useState([])
  const [score, setScore] = useState(0)
  const [instructions, setInstructions] = useState(false)
  const [leaderboard, setLeaderboard] = useState(false)
  const [name, setName] = useState('')

  const clearInputs = () => {
    setDeck = ''
    setScore = 0
    setInstructions = false
    setLeaderboard = false
    setName = ''
  }

  return (
    <div className="game-container">
      <h1>Hi, I'm the game component!</h1>
    </div>
  )

 }

export default Game