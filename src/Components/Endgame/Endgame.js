import React, { useState, useContext} from "react";
import './Endgame.css'
import { NavLink } from 'react-router-dom'
import { setGameContext } from "../Context/Context";
import { getData } from "../../GraphQL/ApiCall";
import { createEndgameQuery } from "../../GraphQL/Mutations";


function Endgame({correctAnswers, category, difficulty}) {
 const [name, setName] = useState("")
 const setGameEnded = useContext(setGameContext)

 const score = correctAnswers * 100

  const submitScore = () => {

    const scorePost = createEndgameQuery(name, score, category, difficulty)

    getData(scorePost)
     .then(setName(""))
     .then(setGameEnded(true))
     .catch(err => console.log(err))
  }

 return (
   <div className="endgame-container">
     <h2 className="text">You got {correctAnswers} out of 8 questions correct!</h2>
     <h3 className="text">You got a score of {score}</h3>
     <form className="form-container">
       <input type="text" minLength="2" maxLength="20" name="username" placeholder="Enter name here" value={name} onChange={e => setName(e.target.value)} autoComplete="off" required />
       <NavLink to="/"><button onClick={submitScore} className="submit">Submit</button></NavLink>
     </form>
   </div>
 )
}

export default Endgame