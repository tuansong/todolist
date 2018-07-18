import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class ProjectItem extends Component {

    render() {
        let Dash = {textDecoration : "line-through"};
        let unDash = {textDecoration : "none"}
        return (
            <div>
                {this.props.items.map((item, index) => {
                    return (
                        <li key={index} style={item.dashed ? Dash: unDash} className="todo bg-dark text-light">
                            <span onClick={() => this.props.clickRemove(index)} className="bg-danger"><FontAwesomeIcon icon="times" /></span>
                            <p onClick={() => this.props.clickDash(index)}>{item.text}</p>
                            <hr className="bg-light"/>
                        </li>
                        // I need to create each item on todolist which is an object inside the array
                        // Then set the dashed property as true or false
                        // So you can legally set the style for it
                    )
                }
                )}
            </div>
        )
    }
}


export default ProjectItem;