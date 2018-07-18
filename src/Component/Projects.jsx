import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      items: []
    }
    this.handleRemove = this.handleRemove.bind(this);
    this.handleDash = this.handleDash.bind(this);
  }

  handleChange = (event) => {
    this.setState({ text: event.target.value })
  }

  handleClick = () => {
    let newItems = this.state.items;
    newItems.push({text:this.state.text, dashed:false});
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

  handleDash(e) {
    console.log("Hello");
    let item = [...this.state.items];
    item[e].dashed = !this.state.items[e].dashed
    this.setState({items : item});
    console.log(this.state.items[e].dashed);
  }

  render() {
    let aTag = {
      fontSize : "10px",
    }
    return (
      <div>
        <input type="text" onChange={this.handleChange} className="input bg-info" placeholder="TELL ME WHAT TO DO"/>
        <a onClick={this.handleClick} className="text-info add"><FontAwesomeIcon icon="plus-circle"/></a>
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
