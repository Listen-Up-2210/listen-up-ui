import React, { Fragment, useEffect, useState } from "react";
import "./Game.css"
import Question from '../Question/Question'
import { useLocation, useNavigate } from 'react-router-dom'
import ErrorDisplay from "../ErrorDisplay/ErrorDisplay"

 function Game()  {
  const [deckID,setDeckID] = useState(0)
  const [card,setCard] = useState({})
  const [error, setError] = useState('')
  const categories = ['animals', 'instruments', 'machines', 'misc']
  const difficulties = ['easy', 'medium', 'hard']
  const navigate = useNavigate()
  let location = useLocation().pathname.split("/")

  useEffect(() => {
    if(!categories.includes(location[1]) || !difficulties.includes(location[2])) {
      navigate('/404')
    }
    const categoryQuery = `
      mutation {
        createDeck(input: {
          category: "${location[1]}"
        }) {
          id
          correctAnswer
          wrongAnswers
          link
        }
      }
    `

    fetch("https://listen-up-be.herokuapp.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        query: categoryQuery
      })
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setCard(data.data.soundCardsByCategory)
    })
    .catch(err => setError(err))
  }, [])
  
  useEffect(()=>{
    fetch("https://listen-up-be.herokuapp.com/graphql", {

    })
  },[deckID])
  
  return (
    <Fragment>
      {(deck.length === 0 && !error) && <p>Loading...</p>}
      {error && <h1>Something went wrong, please try again.</h1>}
      <Question card={card}/>
    </Fragment>
  )
 }

export default Game