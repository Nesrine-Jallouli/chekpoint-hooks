import React from "react";
import ReactPlayer from 'react-player';
import {Link} from 'react-router-dom';


export default function Description (props) {
  return (
    <div className="description">
      <h1>{props.location.state.title}</h1>
      <p>{props.location.state.description}</p>
       <div className="player"><ReactPlayer url={props.location.state.trailer}/></div>
       <Link to="/"><button type="button" class="btn btn-primary">←Home</button></Link> 
    </div>

  );
}
