import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import "./Trailer.css";

import React from 'react'

// renders a video player for the trailer of the movie

const Trailer = () => {

    // gets the ytTrailerId parameter from the URL
    let params = useParams();
    const key = params.ytTrailerId;

    // returns the JSX to render the component
  return (

    // renders the video player
    <div className="react-player-container">
        {(key != null) ? <ReactPlayer url={`https://www.youtube.com/watch?v=${key}`} playing={true} controls={true} 
        width="100%" height="100%" /> : null}
    </div>
  )
}

export default Trailer