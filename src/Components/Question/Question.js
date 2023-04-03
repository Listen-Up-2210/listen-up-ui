import React, { useState, useEffect } from "react";
import "./Question.css"
import Audio from '../Audio/Audio'
import Choices from "../Choices/Choices";

const Question = ({ deckID }) => {

  const [turn, setTurn] = useState(0)
  const [card,setCard] = useState([])

  const advanceTurn = (e) => {
    e.preventDefault()
    setTimeout(() => setTurn(turn + 1), 3000)
  }

  useEffect(() => {
    const cardQuery = `
    query {
        soundCard(deckId: ${deckID}) {
           category
           correctAnswer
           link
           wrongAnswers
        }
     }
    `

    fetch("https://listen-up-be.herokuapp.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        query: cardQuery
      })
    })
    .then(res => res.json())
    .then(data => {
      setCard([data.data.soundCard])
    })
    .catch(err => console.log(err))
  }, [deckID])

  const gameCard = card.map((card, index) => {
      const answers = [...card.wrongAnswers, card.correctAnswer]
      const shuffledAnswers = answers.sort(() => Math.random() - .5)
      return (
        <div className='card' key={index}>
          <Audio audioURL={card.link} />
          <Choices
            advanceTurn={advanceTurn} 
            correctAnswer={card.correctAnswer}
            shuffledAnswers={shuffledAnswers}
          />
        </div>
      )
    })
  

  return (
    <>
      {turn < 8 ? 
      <div className="game-card-container">
        {gameCard ? gameCard : <h2>Loading</h2>}
      </div> :
      <h2>Game Over</h2> }
    </>
  )
}

export default Question