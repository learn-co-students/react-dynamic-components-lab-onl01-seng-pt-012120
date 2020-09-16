import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    return (
      <div className="color-box" style={{opacity: 0.2 /*replace null with the value*/}}>
        {/* your conditional code here! */}
        <ColorBox />
      </div>
    )
  }

}

