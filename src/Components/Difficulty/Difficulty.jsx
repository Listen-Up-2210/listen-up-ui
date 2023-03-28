import React from "react";
import "./Difficulty.css"
import { Link, useLocation } from 'react-router-dom'

function Difficulty() {

    const location = useLocation()
    const category = location.pathname
    
    return (
        <div className="difficulties">
            <Link className="difficulty-link easy" to={`${category}/easy`}>Easy</Link>
            <Link className="difficulty-link medium" to={`${category}/medium`}>Medium</Link>
            <Link className="difficulty-link hard" to={`${category}/hard`}>Hard</Link>
        </div>
    )
}


export default Difficulty