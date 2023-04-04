import React, { useState } from "react";
import './Choices.css'

const Choices = ({correctAnswer, shuffledAnswers, advanceTurn, addCorrectAnswer}) => {

  const [button, setButton] = useState(false)
  // const [buttonStyle, setButtonStyle] = useState('base')
  const [fade, setFade] = React.useState(1)

  const checkAnswer = (e) => {
    e.preventDefault()
    e.target.name === correctAnswer ? countCorrectGuess(e) :
    e.target.className = 'incorrect'
    setButton(true)
    advanceTurn(e)
    setFade(2)
    setTimeout(() => {
      e.target.className = 'base'
      // setButtonStyle('base')
      setFade(1)
      setButton(false)}, 2500)
  }

  const countCorrectGuess = (e) => {
    e.target.className = 'correct'
    addCorrectAnswer()
  }

  const answerButtons = shuffledAnswers.map((answer, index) => {
    console.log(fade)
    return (
      <button onClick={(e) => checkAnswer(e)}
        className='base'
        // onAnimationEnd={() => setFade(0)}
        fade={fade}
        id={index}
        key={index}
        name={answer}
        disabled={button}
        >{answer}
      </button>
    )
  })

  return (
    <div className="choices-container">
      {answerButtons}
    </div>
  )
}

export default Choices