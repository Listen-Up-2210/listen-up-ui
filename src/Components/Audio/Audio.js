import React from "react";
import "./Audio.css";
import ReactAudioPlayer from "react-audio-player";

const Audio = ({ audioURL }) => {
  return <ReactAudioPlayer src={audioURL} controls />;
};

export default Audio;
