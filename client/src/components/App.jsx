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
    this.state.list.map((item) => (console.log(item.title.includes(searched))))
    if(this.state.list.map((item) => (item.title.includes(searched)))) {
      return `Sorry  is unavailable`;
    }
    return `Yes we do have !`;
  }

  render() {
    return (
      <div>
        <h1>Movie List</h1>
        <SearchMovie movieList={this.state.list} onSearch={this.onSearch}/>
        <MovieList movieList={this.state.list} />
      </div>
    )
  }
};
// const App = (props) => (
//   <div>Hello World!</div>
// );

export default App;