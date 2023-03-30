import React from "react";
import "./Category.css"
import { Link } from 'react-router-dom'

function Category() {

    return (
        <div className="categories">
            <Link className="category-link" to='/animals'>Animals</Link>
            <Link className="category-link" to='/instruments'>Instruments</Link>
            <Link className="category-link" to='/machines'>Machines</Link>
            <Link className="category-link" to='/misc'>Miscellaneous</Link>
        </div>
    )
}


export default Category