import React, { useState } from "react";
import "./Question.css"
import Audio from '../Audio/Audio'
import Choices from "../Choices/Choices";

const Question = ({card}) => {

  const [turn, setTurn] = useState(0)

  const advanceTurn = (e) => {
    e.preventDefault()
    setTimeout(() => setTurn(turn + 1), 3000)
  }

  const gameCards = () => {
    const answers = [...card.wrongAnswers, card.correctAnswer]
    const shuffledAnswers = answers.sort(() => Math.random() - .5)
    return (
      <div className='card' key={card.id}>
        <Audio audioURL={card.link} />
        <Choices
        advanceTurn={advanceTurn} 
        correctAnswer={card.correctAnswer}
        shuffledAnswers={shuffledAnswers}
        />
      </div>
    )
  }
  

  return (
    <div className="game-card-container">
      {gameCards[turn]}
    </div>
  )
}

export default Question