import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    const op = this.props.opacity
    if(op > 0.2){

      return (
        <div className="color-box" style={{opacity: op -0.1 /*replace null with the value*/}}>
          
          {/* <div className="color-box" style={{opacity: null}> */}
          {/* your conditional code here! */}
          <ColorBox />
          {/* </div> */}
        </div>
      )
    }
  }

}

