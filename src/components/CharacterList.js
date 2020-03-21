import React, { useEffect, useState } from "react";
import Axios from "axios"

import CharacterCard from "./CharacterCard"
import SearchForm from "./SearchForm"

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([])
  
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const getCharactersData = () => {
      Axios.get("https://rickandmortyapi.com/api/character/")
        .then(characterList => {
          console.log(characterList.data.results)
          setCharacters(characterList.data.results)
        })
        .catch(error => {
          console.log(`Error: ${error}`)
        })
    }
    getCharactersData()
  }, []);

  return (
    <section className="character-list grid-view">
      <SearchForm characters={characters} />
      {characters.map(character => {
        return <CharacterCard key={character.id} character={character} />
      })}
    </section>
  );
}
