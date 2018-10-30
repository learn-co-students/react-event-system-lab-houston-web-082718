// Code Keypad Component Here

import React, { Component } from "react";

export default class Keypad extends Component {
  render() {
    return (
      <div>
        <input
          type="password"
          onKeyUp={this.handleKeyUp}
          placeholder="Enter Password"
        />
      </div>
    );
  }

  handleKeyUp = () => {
    console.log("Entering password...");
  };
}
