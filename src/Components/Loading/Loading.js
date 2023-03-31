import React from "react";
import loadingIcon from "../../icons8-loading-circle.gif"

export default function Loading(){

  return (
    <section className="loading-container">
      <img src={loadingIcon}/>
    </section>
  )
}