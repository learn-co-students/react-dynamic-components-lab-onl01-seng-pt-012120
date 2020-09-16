import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    let newValue = this.props.opacity;
    return (
      <div className="color-box" style={{opacity: newValue}}>
        {newValue >= 0.2 ? (newValue = <ColorBox opacity={newValue - 0.1} />)  : console.log("complete")}
      </div>
    )
  }

}

