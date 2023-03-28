import React from "react";
import "./Difficulty.css"
import { Link, useLocation } from 'react-router-dom'

function Difficulty() {

    const location = useLocation()
    const category = location.pathname
    
    return (
        <div className="difficulties">
            <Link to={`${category}/easy`}>
                <button>Easy</button>
            </Link>
            <Link to={`${category}/medium`}>
                <button>Medium</button>
            </Link>
            <Link to={`${category}/hard`}>
                <button>Hard</button>
            </Link>
        </div>
    )
}


export default Difficulty