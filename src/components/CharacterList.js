import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

export default function CharacterList() {
  const CharacterCall = () => {

    const [Char, setChar] = useState([]);
  
    useEffect(() => {
      axios.get('https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/')
      .then(res => {
        setChar(res.data.results);			
      })
      .catch(err => console.log('Get request failed', err))
      }, [])
      useEffect(() => {
          console.log(Person);
        }, [Char]);

  return (
    <section className="character-list">
      <ol>
			{Char.map((data, i) => (
	            <CharacterCard data={data} key={i}/>
	        ))}
	    </ol>
    </section>
  );
}

}

export default CharacterList;