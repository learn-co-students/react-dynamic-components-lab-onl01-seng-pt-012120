import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    const thisOpacity = parseFloat(this.props.opacity);
    const newOpacity = (thisOpacity - 0.1);

    if (thisOpacity > 0.2) {
      return (
        <div className="color-box" style={{opacity: thisOpacity}}>
          <ColorBox opacity={newOpacity} />
        </div>
     ) } else {
      return null
    }
  }
}
