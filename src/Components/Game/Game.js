import React, { useEffect, useState } from "react";
import "./Game.css"
// import Question from './Question/Question'
import { useLocation } from 'react-router-dom'

 function Game()  {
  const [deck, setDeck] = useState([])
  let location = useLocation().pathname.split("/")

  const clearInputs = () => {
    setDeck([])
  }

  useEffect(() => {
    console.log('LOCATION', location)
    const categoryQuery = `
      query {
        sound_cards(category: location[1]) {
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
      {/* <Question deck={deck}/> */}
    </div>
  )

 }

export default Game