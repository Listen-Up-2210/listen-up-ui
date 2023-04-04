import React, { Fragment, useEffect, useState } from "react";
import "./Game.css"
import Question from '../Question/Question'
import { useLocation, useNavigate } from 'react-router-dom'
import ErrorDisplay from "../ErrorDisplay/ErrorDisplay"

 function Game()  {
  const [deckID,setDeckID] = useState(0)
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
      setDeckID(data.data.createDeck.deck.id)
    })
    .catch(err => {
      console.log(err)
      setError(err)})
  }, [])
  
  return (
    <div>
      {(deck.length === 0 && !error) && <p>Loading...</p>}
      {deckID && <Question deckID={deckID}/>}
      {error && <ErrorDisplay errorCode={'500'} />}
    </div>
  )
 }

//  <Fragment>
//  {(deck.length === 0 && !error) && <p>Loading...</p>}
//  {error && <ErrorDisplay errorCode={'500'} />}
//  <Question deck={deck}/>
// </Fragment>

export default Game