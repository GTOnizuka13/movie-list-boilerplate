import React from 'react'
import MovieList from './MovieList.jsx'

const Movie = (props) => (
  <li>
    <span>{props.item.title}</span>
  </li>
)


export default Movie;