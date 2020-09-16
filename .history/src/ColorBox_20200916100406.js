import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    return (
      <div className="color-box" style={{opacity: this.props.opacity - 0.1 /*replace null with the value*/}}>
        
        {/* <div className="color-box" style={{opacity: null}> */}
        {/* your conditional code here! */}
        {/* <ColorBox /> */}
        {/* </div> */}
      </div>
    )
  }

}

