import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      items: []
    }
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleChange = (event) => {
    this.setState({ text: event.target.value })
  }

  handleClick = () => {
    let newItems = this.state.items;
    newItems.push(this.state.text);
    this.setState({ items: newItems });
  }

  // handleRemove(e) { //With e is an argument in case of item
  //   this.setState({items : this.state.items.filter( i => i!==e)});
  //     }

  handleRemove(e) { //with e is an arguement in case of index
    let item = [...this.state.items];
    item.splice(e, 1)
    this.setState({items : item})
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleChange} />
        <button onClick={this.handleClick}>Submit</button>
        <br />
        <ProjectItem 
          items={this.state.items} 
          clickRemove={this.handleRemove}
          clickDash={this.handleDash}
        />
      </div>
    );
  }
}

export default Project;
