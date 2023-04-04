import React, { useState, useEffect} from "react";
import './Endgame.css'
import { NavLink } from 'react-router-dom'
import Modal from "../Modal/Modal";


function Endgame({correctAnswers, category, difficulty}) {
 const [name, setName] = useState("")
 const score = correctAnswers *100

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
     .then(setName(""))
     .catch(err => console.log(err))
   }

 return (
   <div>
     <h2>You got ${correctAnswers} out of 8 questions correct!</h2>
     <h3>You got a score of ${score}</h3>
     <form className="form-container">
       <input type="text" name="username" placeholder="Enter name here" value={name} onChange={e => setName(e.target.value)} autoComplete="off" required />
       <NavLink to={{pathname: "/", state: {gameEnded: true}}}><button onClick={submitScore}>Submit</button></NavLink>
       {/* <Modal show={true} handleClose={handleCloseModal} display={"leader"} /> */}
     </form>
   </div>
 )
}

export default Endgame