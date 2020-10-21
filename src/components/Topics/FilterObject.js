import React, { Component } from 'react';

export default class FilterObject extends Component {
    constructor() {
        super();
        this.state = {
            dogArray: [{name: "Beans", color: "the most brown", age: 14}, {name: "ChickyP", color: "chocolate dapple", middleName: "Mischief"}, {name: "Sophie", color: "oreo", age: 12, primaryState: "tiny"}, {name: "Binky", color: "black", age: 9}],
            userInput: '',
            filteredDog: []
        }
    }

    handleChange(value) {
        this.setState({userInput: value});
    }

    filterItems(prop) {
        let pets = this.state.dogArray;
        let filteredPets = [];

        for(let i= 0; i < pets.length; i++){
            if(pets[i].hasOwnProperty(prop)){
                filteredPets.push(pets[i]);
            }
        }
        this.setState({filteredDog: filteredPets});
    }
    
    render() {
        return(
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText"> Original: {JSON.stringify(this.state.dogArray, null, 10)}</span>
                <input className="inputLine" onChange={e => this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick={() => this.filterItems(this.state.userInput)}>Filter</button>
                <span className="filterObjectRB">Filtered: {JSON.stringify(this.state.filteredDog, null, 10)}</span>
            </div>
        )
    }
}