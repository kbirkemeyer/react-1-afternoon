import React, { Component } from 'react';

export default class EvenAndOdds extends Component {
    constructor(){
        super();
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }

    handleChange(value) {
        this.setState({userInput: value});
    } 

    assignEvenAndOdds(userInput) {
        let evenNums = [];
        let oddNums = [];
        let arr = userInput.split(',');

        for(let i = 0; i < length.arr; i++){
            if(arr[i] % 2 === 0){
                evenNums.push(parseInt((arr[i]), 10));;
            } else {
                oddNums.push(parseInt((arr[i]), 10));
            }
            this.setState({evenArray: evenNums, oddArray: oddNums})
        }
    }
    
    render() {
        return(
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input className="inputLine" onChange={e => this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick={ () => {this.assignEvenAndOdds(this.state.userInput)}}>Split</button>
                <span className="resultsBox"> Evens: {JSON.stringify(this.state.evenArray) }</span>
                <span className="resultsBox"> Odds: {JSON.stringify(this.state.oddArray) }</span>
            </div>
        )
    }
}