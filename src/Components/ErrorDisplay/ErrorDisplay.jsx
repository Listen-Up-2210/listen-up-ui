import React from "react";
import "./ErrorDisplay.css"
import { Link, useLocation } from 'react-router-dom'

function ErrorDisplay(props) {

    const location = useLocation().pathname.split("/")
    const error = location[2]
    let errorMessage = ''

    if(error === '404') {
        errorMessage = 'The page you were looking for was not found, please click the button below to return to category selection!'
    }

    return (
        <div className="error-display">
            <h1>{`Error ${error}`}</h1>
            <p>{errorMessage}</p>
            <Link className="return-link" to='/'>Home</Link>
        </div>
    )
}


export default ErrorDisplay