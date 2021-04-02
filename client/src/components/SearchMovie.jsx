import React from 'react'
import MovieList from './MovieList.jsx'


class SearchMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title:''
    };
    // bind 'this' to the constructor function
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    console.log(event.target.value);
    this.setState({title: event.target.value});
    this.props.onSearch(event.target.value);
  }


  render() {
    return (
      <form >
        <label>
          Looking for Something?
          <input type="text" value={this.state.title} onChange={this.handleChange}/>
        </label>
        <input type="submit" value="Go!"/>
      </form>
    );
  }
};

export default SearchMovie