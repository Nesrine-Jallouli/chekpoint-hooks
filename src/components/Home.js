import React, { useState, useReducer, useEffect } from "react";
import "../App.css";
import {Header} from "./Header";
import MovieCard from "./MovieCard";
import {moviesData} from "./moviesData";
const initialState = {
  loading: false,
  Movies: [],
  errorMessage: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_MOVIES_REQUEST":
      return {
        ...state,
        loading: true,
        errorMessage: null
      };
    case "SEARCH_MOVIES_SUCCESS":
      return {
        ...state,
        loading: false,
        Movies: action.payload
      };
    case "SEARCH_MOVIES_FAILURE":
      return {
        ...state,
        loading: false,
        errorMessage: action.error
      };
    default:
      return state;
  }
};

const Home = () => {
  const [Movies, setMovies] = useState(moviesData);
  const [titleSearch, settitleSearch] = useState("");
  const [ratingSearch, setRatingSearch] = useState(0);
    const [text]=useState("HOOKED");

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch(Movies)
        .then(response => response.json())
        .then(jsonResponse => {
    
        dispatch({
            type: "SEARCH_MOVIES_SUCCESS",
            payload: jsonResponse.Search
      });
    });
  }, []);
  const { movies, errorMessage, loading } = state;

  return (
    <div className="App">
      <div className="Nav">
        <Header text={text}
        titleSearch={titleSearch}
        settitleSearch={settitleSearch}
        ratingSearch={ratingSearch}
        setRatingSearch={setRatingSearch}
        movies={movies}
        Movies={Movies}
        setMovies={setMovies}
        />
      </div>
      <p className="App-intro">Sharing a few of our favorite movies</p>
      <div className="movies">
        {loading && !errorMessage ? (
           <span className="loader"></span>
        ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : (
          Movies
        .filter(
          (movies) =>
            movies.rating >= ratingSearch &&
            movies.title.toLowerCase().includes(titleSearch.toLowerCase().trim())
        )
        .map((movie, i) => (
          <MovieCard movie={movie} key={i} />
        ))
        )}

      </div>
    </div>
  );
};

export default Home;