import React, { useState, useEffect} from "react";
import './Endgame.css'
import { NavLink } from 'react-router-dom'

function Endgame({score, category, difficulty}) {
  const [name, setName] = useState("")

  // const handleChange = (e) => {
  //   console.log("handleChange", e.target.value)
  //   setName([e.target.name], e.target.value)
  // }

  const submitScore = () => {
    const scorePost = `
      mutation createLeaderBoard {
        createLeaderboard(input: {
          name: "${name}"
          score: ${score}
          category: "${category}"
          difficulty: "${difficulty}"
        }) {
          leaderboard {
            name
            score
            difficulty
            category
          }
          errors
        }
      }
      `

      fetch("https://listen-up-be.herokuapp.com/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          query: scorePost
        })
      })
      .then(res => res.json())
      .then(data => {
        console.log('POSTED', data)
      })
      .catch(err => console.log(err))
    }


  return (
    <div>
      <h2>You got props out of 8 questions correct!</h2>
      <form className="form-container">
        <input type="text" name="username" placeholder="Enter name here" value={name} onChange={e => setName(e.target.value)} autoComplete="off" required />
        <NavLink><button onClick={submitScore}>Submit</button></NavLink>
      </form>
    </div>
  )
}

export default Endgame