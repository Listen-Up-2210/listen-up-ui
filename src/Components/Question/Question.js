import React, { useState } from "react";
import "./Question.css"
import Audio from '../Audio/Audio'
import Choices from "../Choices/Choices";

const Question = () => {

  const deck = [
    {
      id: 16933,
      audioURL: "https://freesound.org/people/acclivity/sounds/16933/",
      correctAnswer: "Donkey",
      wrongAnswers: ["Horse", "Goat", "Cow"]
    },
    {
      id: 73371,
      audioURL: "https://freesound.org/people/sofajoe/sounds/73371/",
      correctAnswer: "Bee",
      wrongAnswers: ["Hornet", "Humming Bird", "Mosquito"]
    },
    {
      id: 510917,
      audioURL: "https://freesound.org/people/Lydmakeren/sounds/510917/",
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
    return (
      <>
        <Audio audioURL={question.audioURL}/>
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
        {gameCards[turn]}
      </div>
      <button onClick={(e) => handleClick(e)}>Next Question</button>
    </>
  )
}

export default Question