import React, { useEffect, useState } from "react";
import "./Game.css"

 function Game()  {
  const [deck, setDeck] = useState([])

  const clearInputs = () => {
    setDeck([])
    setScore(0)
    setName('')
  }

  useEffect(() => {
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
        query: categoryQuery
      })
    })
    .then(res => res.json)
    .then(data => {
      console.log(data)
      setDeck(data)
    })
    .catch(err => console.log(err))
  }, []) 
  

  return (
    <div className="game-container">
      <h1>Hi, I'm the game component!</h1>
    </div>
  )

 }

export default Game