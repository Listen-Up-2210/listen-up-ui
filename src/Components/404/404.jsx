import React from "react";
import "./404.css"
import { Link } from 'react-router-dom'

function Error404() {

    return (
        <div className="error-404">
            <h1>Error 404</h1>
            <p>The page you were looking for was not found, please click the button below to return to category selection!</p>
            <Link className="return-link" to='/'>Categories</Link>
        </div>
    )
}


export default Error404