import axios from "axios";
import React, { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import "./index.scss"

const Search = ({ setMovies }) => {
  const [searchInput, setSearchInput] = useState([]);
  const inputVal = useRef();
   
  useEffect(() => {
   axios.get(`https://www.omdbapi.com/?apikey=33b4a72d&s=Harry`).then((data) => setSearchInput(data.data.Search))
  }, [])
  


  const searchHere = () => {
    let searchFill = searchInput.filter((movie) =>
      movie.Title.toLocaleLowerCase().includes(
        inputVal.current.value.toLocaleLowerCase()
      )
    );
    setMovies(searchFill);
  };

  return (
    <div id="search">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input ref={inputVal} type="text" placeholder="Search..." onChange={() => searchHere()}/>
    </div>
  );
};

export default Search;
