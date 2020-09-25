import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    return (
      <div className="color-box" style={{opacity: 1 /*replace null with the value*/}}>
        {this.props.value < 0.2 ? null : ( <div className="color-box"></div>)}
        {/* your conditional code here! */}
      </div>
    )
  }

}

