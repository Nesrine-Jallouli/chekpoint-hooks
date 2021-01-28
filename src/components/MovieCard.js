import React from 'react';
import { Link} from "react-router-dom";
import Rate from "./Rate";
const DEFAULT_PLACEHOLDER_IMAGE = "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

const  MovieCard = ({movie: { title, Poster, description, rating, trailer }}) => {
  const poster = Poster === 'N/A' ? DEFAULT_PLACEHOLDER_IMAGE : Poster;

  return (
    <div className="movie">
     
      <div className="catalog__item">
      <img
          className="catalog__item__img"
          width = "300px"
          alt={`The movie titled: ${title}`}
          src={poster}
      />
        {/* <Link to="/Description"><div className="catalog__item__resume">{movie.description}</div></Link> */}
        
        <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to={{
                    pathname: "/description",
                    state: {title,Poster,description,rating, trailer}            
                  }}
                >
                 <div className="catalog__item__resume">{description}</div>
                </Link>
      </div>¨
      <p>
        {title}
      <Rate rating={rating} style={{ height: "30px" }} />
      </p>
    </div>
  )
}

export default MovieCard
