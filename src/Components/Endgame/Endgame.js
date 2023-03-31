import React from "react";
import './Endgame.css'
import { Navlink } from 'react-router-dom'


function Endgame(props) {
  const [username,setUsername] = setState('')

  const leaderboardPost = `
    query {
      username: ${username},
      score: ${props.score}
    }
  `

  const updateLeaderboard = () => {
    fetch("URL", {
      method: `POST`,
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({

      })
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))
  }

  const handleChange = event => {
    setUsername(event.target.value)
  }

  return (
    <div>
      <h2>You got props out of 8 questions correct!</h2>
      <form className="form-container">
        <input type="text" onChange={handleChange} name="username" placeholder="Enter name here" required value={username}/>
        <Navlink>Submit</Navlink>
      </form>
    </div>
  )
}

export default Endgame