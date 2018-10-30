// Code EyesOnMe Component Here
import React, { Component } from "react";

class EyesOnMe extends Component {
  focus = () => {
    console.log("Good!");
  };

  blur = () => {
    console.log("Hey! Eyes on me!");
  };

  render() {
    return (
      <button onFocus={this.focus} onBlur={this.blur}>
        Open
      </button>
    );
  }
}
export default EyesOnMe;
