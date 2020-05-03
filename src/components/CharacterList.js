import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import CharacterCard from "./CharacterCard"

export default function CharacterList() {

    const [Char, setChar] = useState([]);
  
    useEffect(() => {
      axios.get('https://rickandmortyapi.com/api/character/')
      .then(res => {
        setChar(res.data.results);			
      })
      .catch(err => console.log('Get request failed', err))
      }, [])
      useEffect(() => {
          console.log(Char);
        }, []);

  return (
    <section className="character-list">
			{Char.map((data, i) => (
	            <CharacterCard data={data} key={i}/>
	        ))}
    </section>
  )
      };