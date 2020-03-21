import React, { useState, useEffect } from "react";
import Axios from "axios"

import CharacterList, { characters } from "./CharacterList"

export default function SearchForm(props) {
  const [searchItem, setSearchItem] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const handleChanges = event => {
    setSearchItem(event.target.value)
  }

  useEffect(() => {
    const results = props.characters.filter(character => {
      character.includes(searchItem)
    })
    setSearchResults(results)
  }, [searchItem])

  return (
    <section className="search-form">
      <input 
        type="text"
        placeholder="Search"
        value={searchItem}
        onChange={handleChanges}
      />
      <ul>
        {searchResults.map(item => {
          return <li>{item}</li>
        })}
      </ul>
    </section>
  );
}
