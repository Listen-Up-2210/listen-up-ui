import React from "react";
import { useEffect } from "react"
import "./Difficulty.css"
import { Link, useLocation, useNavigate } from 'react-router-dom'

function Difficulty() {

    const validCategories = ['/animals', 'instruments', '/machines', '/misc']
    const location = useLocation()
    const category = location.pathname
    const navigate = useNavigate()
    
    useEffect(() => {
        if(!validCategories.includes(category)) {
            navigate('/404')
        }
    }, [])

    return (
        <div className="difficulties">
            {(!validCategories.includes(category))}
            <Link className="difficulty-link easy" to={`${category}/easy`}>Easy</Link>
            <Link className="difficulty-link medium" to={`${category}/medium`}>Medium</Link>
            <Link className="difficulty-link hard" to={`${category}/hard`}>Hard</Link>
        </div>
    )
}


export default Difficulty