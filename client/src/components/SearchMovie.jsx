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
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({title: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
    alert(this.props.onSearch(this.state.title));
   // alert('Looking for ' + this.state.title);
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
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