import React, { useState, useEffect } from "react";
import {IoCloseSharp} from 'react-icons/io5'
import './Leaderboard.css'

const Leaderboard = ({ handleClose }) => {
    const [leaderboard, setLeaderboard] = useState([]);

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
            console.log('leaderboard', data)
            setLeaderboard(data.data.leaderboards)
        })
        .catch(err => console.log(err))
      }, [])

      const scoreboard = leaderboard.map((obj, index) => {
        return (
            <tr key={index}>
                <td>{obj.name}</td>
                <td>{obj.score}</td>
            </tr>
        )
      })

    return (
        <section className="modal-main leader">
            <div className="modal-header">
                <h2>Leaderboard Content</h2>
                <IoCloseSharp className='close-Btn' onClick={handleClose} />
            </div>
            {/* <p>This is the content of the modal.</p> */}
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {scoreboard}
                </tbody>
            </table>
        </section>
    )
}

export default Leaderboard