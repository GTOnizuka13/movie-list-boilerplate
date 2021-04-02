import React from 'react';
import Movie from './Movie.jsx'
import MovieList from './MovieList.jsx'
import SearchMovie from './SearchMovie.jsx'
import AddMovie from './AddMovie.jsx'
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
        ],
      searched: []
    };
    this.onSearch = this.onSearch.bind(this);
    this.addNew = this.addNew.bind(this);
    this.displayList = this.displayList.bind(this);
  }
  // fix always returns first statement no matter what
  onSearch(searched) {
    let movies = this.state.list.filter(function (item) {
      let movie = item.title.toLowerCase();
      searched = searched.toLowerCase();
      if (movie.startsWith(searched)) {
        console.log(item);
        return movie;
      }
    });
    console.log(movies);
    this.setState({
      searched: movies
    }
    );
  }
  displayList() {
    return this.state.list.filter(item => item.title);
  }

  addNew(newMovie) {
    let movieList = this.state.list.slice();

    let isCopy = movieList.find(function (item) {
      if (item.title === newMovie) {
        return true;
      }
    })
    if (!isCopy) {
      movieList.push({ title: newMovie });
      this.setState({
        list: movieList
      })
    }
  }



  render() {
    return (
      <div>
        <h1>Movie List</h1>
        <AddMovie addNew={this.addNew} />
        <SearchMovie movieList={this.state.list} onSearch={this.onSearch} />
        <MovieList movieList={this.state.searched.length === 0 ? this.state.list : this.state.searched} onSearch={this.onSearch} />
      </div>
    )
  }
};
// const App = (props) => (
//   <div>Hello World!</div>
// );

export default App;