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
      mutation createDeck {
        createDeck(input: {
          category: "${location[1]}"
        }) 
        {
          deck {
            id
          }
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
      console.log(data.data)
      setDeckID(data.data.createDeck.deck.id)
    })
    .catch(err => setError(err))
  }, [])
  
  return (
    <div>
      {deckID ? <Question deckID={deckID}/> : <h2>Loading</h2>}
    </div>
  )
 }

export default Game