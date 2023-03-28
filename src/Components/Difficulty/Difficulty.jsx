import React from "react";
import "./Difficulty.css"
import { Link, useLocation } from 'react-router-dom'

function Difficulty() {

    return (
        <div className="difficulties">
            <Link to ='/easy'>
                <button>Easy</button>
            </Link>
            <Link to ='/medium'>
                <button>Medium</button>
            </Link>
            <Link to ='/hard'>
                <button>Hard</button>
            </Link>
        </div>
    )
}


export default Difficulty