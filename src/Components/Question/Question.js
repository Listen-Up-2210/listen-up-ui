import React, { useState, useEffect } from "react";
import "./Question.css"
import Audio from '../Audio/Audio'
import Choices from "../Choices/Choices";
import EndGame from "../EndGame/EndGame";
import Loading from "../Loading/Loading";


const Question = ({ deckID }) => {

  const [turn,setTurn] = useState(1)
  const [card,setCard] = useState({})
  const [correctAnswers, setCorrectAnswers] = useState(0)
  const [answers, setAnswers] = useState([])
  const [loading,setLoading] = useState(true)

  const advanceTurn = (e) => {
    e.preventDefault()
    setTimeout(() => setTurn(turn + 1), 3000)
  }

  const addCorrectAnswer = () => {
    setCorrectAnswers(correctAnswers + 1)
  }

  useEffect(() => {
    console.log('use effect')
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
      setCard(data.data.soundCard)
      const newCard = data.data.soundCard
      const answers = [...newCard.wrongAnswers, newCard.correctAnswer]
      const shuffledAnswers = answers.sort(() => Math.random() - .5)
      setAnswers(shuffledAnswers)
      setLoading(false)
    })
    .catch(err => console.log(err))
  }, [deckID, turn])

  return (
  <div className="loading-container">
    {(loading) ? <Loading /> : 
    <div className="game-container">
      {turn < 9 ? 
      <div className='card' key={card.id}>
        <h2 className='turn-count'>Question: {turn} / 8</h2>
        <Audio audioURL={card.link} />
        <Choices
          advanceTurn={advanceTurn} 
          correctAnswer={card.correctAnswer}
          shuffledAnswers={answers}
          addCorrectAnswer={addCorrectAnswer}
          />
      </div> :
      <EndGame correctAnswers={correctAnswers}/>
    }
    </div>
    }
  </div>
  )
}

export default Question
