import React, { useState } from "react";
import "./Question.css"
import Audio from '../Audio/Audio'
import Choices from "../Choices/Choices";

const Question = () => {

  const deck = [
    {
      id: 16933,
      audioURL: "https://cdn.freesound.org/previews/16/16933_37876-hq.mp3",
      correctAnswer: "Donkey",
      wrongAnswers: ["Horse", "Goat", "Cow"]
    },
    {
      id: 73371,
      audioURL: "https://cdn.freesound.org/previews/73/73371_238949-hq.mp3",
      correctAnswer: "Bee",
      wrongAnswers: ["Hornet", "Humming Bird", "Mosquito"]
    },
    {
      id: 510917,
      audioURL: "https://cdn.freesound.org/previews/510/510917_11157357-hq.mp3",
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
      <div key={question.id}>
        <Audio audioURL={question.audioURL} />
        <Choices 
        correctAnswer={question.correctAnswer}
        wrongAnswers={question.wrongAnswers}
        />
      </div>
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