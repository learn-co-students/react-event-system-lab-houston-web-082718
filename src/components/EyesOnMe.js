// Code EyesOnMe Component Here
import React, { Component } from "react";

export default class EyesOnMe extends Component {
  handleFocus = () => {
    console.log("Hey! Eyes on me!");
  };

  handleBlur = () => {
    console.log("Good!");
  };
  render() {
    return (
      <div>
        <button onFocus={this.handleFocus()} onBlur={this.handleBlur()}>
          Hello
        </button>
      </div>
    );
  }
}
