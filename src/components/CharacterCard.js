import React from "react";
import CharacterList from "./CharacterList";

const CharacterCard = props => {
  return (
    <ol>
<li className="character-card" key={props.id}>
<h2>Name: {props.data.name}</h2>
<p>Status: {props.data.status}</p> 
<p>Species: {props.data.species}</p>
<p>Gender: {props.data.gender}</p>    
</li>
</ol>
)
  }

export default CharacterCard;

