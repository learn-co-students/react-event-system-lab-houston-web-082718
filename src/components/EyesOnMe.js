// Code EyesOnMe Component Here
import React from 'react'

export default class EyesOnMe extends React.Component {
    lookAtMe = (event) => {
        console.log('Good!')
    }

    blurIt = (event) => {
        console.log('Hey! Eyes on me!')
    }

    render() {
        return (
            <button onFocus={this.lookAtMe} onBlur={this.blurIt}>Tell Me Numbers</button>
        )
    }
}