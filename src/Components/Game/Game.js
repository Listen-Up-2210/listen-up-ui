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

  setDeck = () => {

  }

  setScore = () => {
    return score ++
  }

  setInstructions = () => {
    instructions = true
    return instructions
  }

  setLeaderboard = () => {
    leaderboard = true
    return leaderboard
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