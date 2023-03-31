import React from "react";
import loadingIcon from "../../icons8-loading-circle.gif"
import './Loading.css'

export default function Loading(){

  return (
    <section className="loading-container">
      <img src={loadingIcon} className="loading-icon"/>
      <p> Game is Loading, Please Wait </p>
    </section>
  )
}