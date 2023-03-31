import React from "react";
import "./ErrorDisplay.css"
import { Link, useLocation } from 'react-router-dom'

function ErrorDisplay(props) {

    const location = useLocation().pathname.split("/")
    console.log(location)
    return (
        <div className="error-display">
            <h1>{`Error ${location[1]}`}</h1>
            <p>The page you were looking for was not found, please click the button below to return to category selection!</p>
            <Link className="return-link" to='/'>Categories</Link>
        </div>
    )
}


export default ErrorDisplay