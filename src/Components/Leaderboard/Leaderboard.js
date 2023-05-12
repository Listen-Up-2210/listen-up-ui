import React, { useState, useEffect } from "react";
import {IoCloseSharp} from 'react-icons/io5'
import ErrorDisplay from "../ErrorDisplay/ErrorDisplay"
import './Leaderboard.css'
import { leaderboardQuery } from "../../GraphQL/Queries";
import { getData } from "../../GraphQL/ApiCall";

const Leaderboard = ({ handleClose }) => {
    const [leaderboard, setLeaderboard] = useState([]);
    const [error, setError] = useState('')

    useEffect(() => {
        getData(leaderboardQuery)
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