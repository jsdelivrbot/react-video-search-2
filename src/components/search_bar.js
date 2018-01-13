import React, { Component } from 'react'

class SearchBar extends Component {
    // this is how we initilize state in a class based components
    // constructor is reserved for us doing set up
    constructor(props){
        super(props);
        this.state = { term: '' }
    }
render (){
    // we change the state by calling 'setState'
    return (
    <div>
        <input 
        // CONTROLLED FORM ELEMENT: value only changes when the state changes
        value={this.state.term}
        onChange={ (event) => this.setState({term: event.target.value})} /> 
    </div>
);
}
}

export default SearchBar ;