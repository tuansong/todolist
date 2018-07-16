import React, { Component } from 'react';


class ProjectItem extends Component {

    render() {
        return (
            <div>
                {this.props.items.map((item, index) => {
                    return (
                        <div>
                            <p onClick={() => this.props.clickDash} style={this.props.style}>{item}</p>
                            <button onClick={() => this.props.clickRemove(index)} >X</button>
                        </div>
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