import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
      const newValue = this.props.value * 2;
      return this.props.value > 100 ? null : ( < div >
        <
        Example value = {
          newValue
        }
        /> <
        /div>)
      }

  {/* render() {
    let op = this.props.opacity
    if(op > 0.2){
      op-=0.1
      return (
        <div className="color-box" style={{opacity: op /*replace null with the value*}}>
          {/* <ColorBox /> */}
          {/* <ColorBox opacity = {op - 0.1}/>           */}
        {/* </div>
      )
    }
  } */} 

}

