import React from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'

const api_key = process.env.API_KEY;

// Create a new component. This should produce some HTMl

const App = () => {
    return (
    <div>
        <SearchBar />
    </div>
    )
}

// Take generated componented and place it on the DOM

ReactDOM.render(<App />, document.querySelector('.container'))
