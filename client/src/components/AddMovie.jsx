import React from 'react'


class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title:''
    }
    this.clickHandler = this.clickHandler.bind(this);
    this.changeTitle = this.changeTitle.bind(this);
  }
  changeTitle() {
    this.setState({
      title: event.target.value
    })
  }
  clickHandler(event) {
    event.preventDefault();
    console.log(event)
    this.props.addNew(this.state.title);

  }

  render() {
    return (
      <form>
        <label> Add Movie
                <input type="text" movie="title" value={this.state.title} onChange={this.changeTitle}/>
        </label>
        <button onClick={this.clickHandler}>Add</button>
      </form>
    )
  }

}

export default AddMovie;