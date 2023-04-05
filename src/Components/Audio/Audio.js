import React, {useState, useEffect} from "react";
import './Audio.css'
import ReactAudioPlayer from "react-audio-player";

const Audio = ({audioURL, difficulty, turn}) => {

  const[audioClicks, setAudioClicks] = useState(0)
  const[disable,setDisable] = useState("show")

  useEffect(()=>{
    setDisable("show")
    if(difficulty === "easy"){
      setAudioClicks(3)
    } else if (difficulty === "medium") {
      setAudioClicks(2)
    } else {
      setAudioClicks(1)
    }
  },[turn])

  const handleAudioClick = () => {
    if (audioClicks > 0){
      setAudioClicks(audioClicks-1)
      console.log("bruh")
    } else {
      setDisable("hide")
    }
  }

  return (
      <ReactAudioPlayer
        src={audioURL}
        controls
        onPlay={()=> handleAudioClick()}
        className={disable}
      />
  )
}

export default Audio