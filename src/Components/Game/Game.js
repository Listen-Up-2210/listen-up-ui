import React, { useEffect, useState } from "react";
import "./Game.css"
import Question from '../Question/Question'
import Loading from '../Loading/Loading'
import { useLocation } from 'react-router-dom'

 function Game()  {
  const [deck, setDeck] = useState([])
  const [loading, setLoading] = useState(true)
  let location = useLocation().pathname.split("/")

  useEffect(() => {
    console.log("Location" , location[1])
    const categoryQuery = `
      query {
        soundCardsByCategory(category: "${location[1]}") {
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
      setDeck(data.data.soundCardsByCategory)
    })
    // .then(() => setLoading(false))
    .catch(err => console.log(err))
  }, []) 
  
  return (
    <>
      {loading ? <Loading/> : <Question deck={deck}/>}
    </>
  )
 }

export default Game