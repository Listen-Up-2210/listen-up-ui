import React from "react";
import "./ErrorDisplay.css"
import { Link } from 'react-router-dom'

function ErrorDisplay(props) {

    const error = props.errorCode
    let errorMessage = ''

    if(Number(error) >= 500) {
        errorMessage = 'Please try again later.'
    }
    else if(Number(error) >= 400) {
        errorMessage = 'The page you were looking for was not found.'
    }
    else {
        errorMessage = 'Something went wrong please try again.'
    }

    return (
        <div className="error-display">
            <h1>{`Error ${error}`}</h1>
            <p>{errorMessage}</p>
            {(Number(error) >= 400 && Number(error) < 500) && <Link className="return-link" to='/'>Home</Link>}
        </div>
    )
}


export default ErrorDisplay