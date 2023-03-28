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

  setDeck = () => {
    const categoryQuery = `
      query {
        sound_cards(category: input) {
          id:
          correct answer:
          wrong answers:
        }
      }
    `
    fetch("URL", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        query: query
      })
    })
    .then(res => res.json)
    .then(data => {
      console.log(data)
      deck = data
    })
    .catch(err => console.log(err))
    return deck
  }

  setScore = () => {
    score = prevScore + 1
    return score    
  }

  setName = (e) => {
    name = event.target.value
    return name
  }


  return (
    <div className="game-container">
      <h1>Hi, I'm the game component!</h1>
    </div>
  )

 }

export default Game