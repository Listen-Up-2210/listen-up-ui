import React, { useState } from "react";
import "./Question.css"
import Audio from '../Audio/Audio'
import Choices from "../Choices/Choices";

const Question = () => {

  const deck = [
    {
      id: 16933,
      audio: 'url',
      correctAnswer: "Donkey",
      wrongAnswers: ["Horse", "Goat", "Cow"]
    },
    {
      id: 73371,
      audio: 'url',
      correctAnswer: "Bee",
      wrongAnswers: ["Hornet", "Humming Bird", "Mosquito"]
    },
    {
      id: 510917,
      correctAnswer: "Seagull",
      wrongAnswers: ["Pelican", "Eagle", "Hawk"],
    }
  ]  

  const [turn, setTurn] = useState(0)

  const handleClick = (e) => {
    e.preventDefault()
    setTurn(turn + 1)
  }

  const gameCards = deck.map(question => {
    console.log('question', question)
    return (
      <>
        <Audio audio={question.audio}/>
        <Choices 
        correctAnswer={question.correctAnswer}
        wrongAnswers={question.wrongAnswers}
        />
      </>
    )
  })

  return (
    <>
      <div className="game-card-container">
        {gameCards}
      </div>
      <button onClick={(e) => handleClick(e)}/>
    </>
  )
}

export default Question