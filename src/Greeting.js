import React from 'react';

export class Greeting extends React.Component {
    render(){
        if(this.props.signedIn == false) {
            return <h1> says false </h1>
        }
        else {
            return <h1> says true</h1>
        }
    }
}