
import React, { useState } from "react";
import './Choices.css'

const Choices = ({correctAnswer, wrongAnswers, advanceTurn}) => {

  const [button, setButton] = useState(false)

  const answers = [...wrongAnswers, correctAnswer]
  const shuffledAnswers = answers.sort(() => Math.random() - .5)

  const checkAnswer = (e) => {
    e.target.name === correctAnswer ? e.target.className = 'correct' :
    e.target.className = 'incorrect'
    setButton(true)
    advanceTurn(e)
  }



  const answerButtons = shuffledAnswers?.map((answer, index) => {
    return (
      <button onClick={(e) => checkAnswer(e)}
        className='base'
        id={index}
        key={index}
        name={answer}
        disabled={button}
        >{answer}
      </button>
    )
  })

  return (
    <>
      <div className="choices-container">
        {answerButtons}
      </div>
    </>
  )
}

export default Choices