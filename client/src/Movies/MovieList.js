import React from 'react';
import {Link, useRouteMatch} from 'react-router-dom'
import styled from 'styled-components'

const styleDiv = styled.div`
  h2{
    text-decoration = none;
  }
`


export default function MovieList(props) {
  
  const {movies} = props;
  const {url} = useRouteMatch();
  // console.log(url);

  return (
    <div className="movie-list" >
      {movies.map(movie => (
        <Link key={movie.id} to={`/movies/${movie.id}`}>
          <MovieDetails key={movie.id} movie={movie} />
         </Link>
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore } = props.movie;

  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  );
}
