import React from 'react'
import Movie from './Movie.jsx'

const MovieList = (props) => (

  <div>
    {props.movieList.map((item, i ) => (
      <Movie item={item} key={item+1}/>
    ))}
  </div>

)

export default MovieList;