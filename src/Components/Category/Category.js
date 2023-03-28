import React from "react";
import "./Category.css"
import { Link, useLocation } from 'react-router-dom'

function Category() {

    return (
        <div className="categories">
            <Link to ='/animals'>
                <button>Animals</button>
            </Link>
            <Link to ='/instruments'>
                <button>Instruments</button>
            </Link>
            <Link to ='/machines'>
                <button>Machines</button>
            </Link>
            <Link to ='/misc'>
                <button>Miscellaneous</button>
            </Link>
        </div>
    )
}


export default Category