import React, { useState, useEffect } from "react";
import {IoCloseSharp} from 'react-icons/io5'
import ErrorDisplay from "../ErrorDisplay/ErrorDisplay"
import './Leaderboard.css'

const Leaderboard = ({ handleClose }) => {
    const [leaderboard, setLeaderboard] = useState([]);
    const [error, setError] = useState('')

    useEffect(() => {
        const leaderboardQuery = `
         query getLeaderboards {
            leaderboards {
              score
              category
              difficulty
              name
            }
          }
        `
    
        fetch("https://listen-up-be.herokuapp.com/graphql", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            query: leaderboardQuery
          })
        })
        .then(res => res.json())
        .then(data => {
            setLeaderboard(data.data.leaderboards)
        })
        .catch(err => setError(err))
      }, [])

      const scoreboard = leaderboard.map((obj, index) => {
        return (
            <tr key={index}>
                <td>{index + 1}</td>
                <td style={{"textAlign":"left"}}>{obj.name}</td>
                <td>{obj.score}</td>
            </tr>
        )
      })

    return (
        <section className="modal-main leader">
            <IoCloseSharp className='close-Btn' onClick={handleClose} />
            {error ? <ErrorDisplay errorCode='500' /> :
              <table className="container">
                <thead>
                  <tr>
                    <th style={{"width":"20%"}}>Rank</th>
                    <th style={{"width":"50%"}}>Name</th>
                    <th style={{"width":"20%"}}>Score</th>
                  </tr>
                </thead>
                <tbody>
                  {scoreboard}
                </tbody>
              </table>
            }
        </section>
    )
}

export default Leaderboard