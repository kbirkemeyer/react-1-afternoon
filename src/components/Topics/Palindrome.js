import React, { Component } from 'react';

export default class Palindrome extends Component {
    constructor() {
        super();
        this.state = {
            userInput: "",
            palindrome: ""
        };
    }
    
handleChange(val) {
    this.setState({userInput: val});
}

palindromer(userInput) {

}

    render() {
        return(
            <div className="puzzleBox palindromePB">
                <h4>Palindrome</h4>
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}/>
                <button className="confirmationButton" onClick={() => this.palindromer(this.state.userInput)}></button>
                <span className="resultsBox"> Palindrome: {this.state.palindrome}</span>
            </div>
        )
    }
}