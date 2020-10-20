import React, { Component } from 'react';

export default class FilterString extends Component {
    constructor() {
        super();
        this.state = {
            gumFlavors: ["peppermint", "spearmint", "wintermint", "bubblegum", "strawberry", "winterberry"],
            userInput: "",
            filteredGumFlavors: [] 
        }
    }

    handleChange(val) {
        this.setState({userInput: val});
    }

    findString(userInput) {
        let flavors = this.state.gumFlavors;
        let filteredGumFlavors = [];

        for(let i = 0; i < flavors.length; i++){
            if(flavors[i].includes(userInput)){
                filteredGumFlavors.push(flavors[i]);
            }
        }
        this.setState({filteredGumFlavors: filteredGumFlavors});
    }
    
    render() {
        return(
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">Gum Flavors: {JSON.stringify(this.state.gumFlavors, null, 10)}</span>
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}/>
                <button className="confirmationButton" onClick={() => this.findString(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterStringRB">Filtered Gum Flavors: {JSON.stringify(this.state.filteredGumFlavors, null, 10)}</span>
            </div>
        )
    }
}