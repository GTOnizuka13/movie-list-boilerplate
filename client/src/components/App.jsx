import React from 'react';
import Movie from './Movie.jsx'
import MovieList from './MovieList.jsx'
import SearchMovie from './SearchMovie.jsx'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list:
        [
          { title: 'Mean Girls' },
          { title: 'Hackers' },
          { title: 'The Grey' },
          { title: 'Sunshine' },
          { title: 'Ex Machina' }
        ]
    };
    this.onSearch = this.onSearch.bind(this);
  }
  // fix always returns first statement no matter what
  onSearch(searched) {
    let movies = this.state.list.map(function (item) {
      return item.title;
    });
    return alert(movies.includes(searched) ? `Yes, we have ${searched}` : 'Not Available');
  }

  render() {
    return (
      <div>
        <h1>Movie List</h1>
        <SearchMovie movieList={this.state.list} onSearch={this.onSearch} />
        <MovieList movieList={this.state.list} />
      </div>
    )
  }
};
// const App = (props) => (
//   <div>Hello World!</div>
// );

export default App;