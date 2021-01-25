import React from 'react'
import Rate from "./Rate";
const DEFAULT_PLACEHOLDER_IMAGE = "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

const  MovieCard = ({movie}) => {
  const poster = movie.Poster === 'N/A' ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;

  return (
    <div className="movie">
     
      <div className="catalog__item">
      <img
          className="catalog__item__img"
          width = "300px"
          alt={`The movie titled: ${movie.title}`}
          src={poster}
        />
        <div className="catalog__item__resume">{movie.description}</div>
      </div>¨
      <p>
        {movie.title}
      <Rate rating={movie.rating} style={{ height: "30px" }} />
      </p>
    </div>
  )
}

export default MovieCard
