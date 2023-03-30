import React, { useEffect, useState } from "react";
import "./Game.css"
import Question from '../Question/Question'
import { useLocation } from 'react-router-dom'

 function Game()  {
  // const [deck, setDeck] = useState([])
  let location = useLocation().pathname.split("/")

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

  // useEffect(() => {
  //   console.log('LOCATION', location)
  //   const categoryQuery = `
  //     query {
  //       sound_cards(category: location[1]) {
  //         id:
  //         correct answer:
  //         wrong answers:
  //       }
  //     }
  //   `

  //   fetch("URL", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({
  //       query: categoryQuery
  //     })
  //   })
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(data)
  //     setDeck(data)
  //   })
  //   .catch(err => console.log(err))
  // }, []) 
  

  return (
    // <div className="game-container">
      <Question deck={deck}/>
    // </div>
  )

 }

export default Game