import React from "react";
import Rate from "./Rate";
import { AddMovie } from "./AddMovie";

export const Header = (
{
  text,
  settitleSearch,
  setRatingSearch,
  ratingSearch,
  Movies,
  setMovies,

}) => {
  
  const addMovie = (newMovie) => {
    setMovies([...Movies, newMovie]);
  };
  return (
    <div>
      <header className="App-header">
        <h2>{text}</h2>
        </header>
        <form className="search">
        <p><Rate starIndex={setRatingSearch} rating={ratingSearch}/></p>
      <input className="input-search"
            name="search"
            type="text"
            placeholder="Search with title"
            onChange={(event) => {settitleSearch(event.target.value);}}/>
        <input onClick={""} type="submit" value="SEARCH" />
      </form>
      <div className="addmovie">
        <AddMovie addMovie={addMovie} />
      </div>
    </div>
  );
}
