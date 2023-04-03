import React, { useState } from "react";
import "./Question.css"
import Audio from '../Audio/Audio'
import Choices from "../Choices/Choices";

const Question = ({deck}) => {

  const [turn, setTurn] = useState(0)

  const advanceTurn = (e) => {
    e.preventDefault()
    setTimeout(() => setTurn(turn + 1), 3000)
  }

  const gameCards = deck.map(question => {
    const answers = [...question.wrongAnswers, question.correctAnswer]
    const shuffledAnswers = answers.sort(() => Math.random() - .5)
    return (
      <div className='card' key={question.id}>
        <Audio audioURL={question.link} />
        <Choices
        advanceTurn={advanceTurn} 
        correctAnswer={question.correctAnswer}
        shuffledAnswers={shuffledAnswers}
        turn={turn}
        />
      </div>
    )
  })

  return (
    <>
      {turn < 8 ? 
      <div className="game-card-container">
        {gameCards[turn]}
      </div> :
      <h2>Game Over</h2> }
    </>
  )
}

export default Question