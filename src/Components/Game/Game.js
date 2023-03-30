import React, { useEffect, useState } from "react";
import "./Game.css"
import Question from '../Question/Question'
import { useLocation } from 'react-router-dom'

 function Game()  {
  const [deck, setDeck] = useState([])
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
    .catch(err => console.log(err))
  }, []) 
  
  return (
    <Question deck={deck}/>
  )
 }

export default Game