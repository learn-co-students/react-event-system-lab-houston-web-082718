import React, { Component } from 'react';

export default class EyesOnMe extends Component {
    render() {
        return (
            <button onFocus={this.focused} onBlur={this.blurred}/>
        )
    }

    blurred = () => {
        console.log("Hey! Eyes on me!")
    }

    focused = () => {
        console.log("Good!")
    }
}