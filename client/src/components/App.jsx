import React from 'react';
import Movie from './Movie.jsx'
import MovieList from './MovieList.jsx'
import SearchMovie from './SearchMovie.jsx'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {list:
      [
        { title: 'Mean Girls' },
        { title: 'Hackers' },
        { title: 'The Grey' },
        { title: 'Sunshine' },
        { title: 'Ex Machina' }
      ]
    }
  }
  render() {
    return (
      <div>
        <h1>Movie List</h1>
        <MovieList movieList={this.state.list} />
      </div>
    )
  }
};
// const App = (props) => (
//   <div>Hello World!</div>
// );

export default App;