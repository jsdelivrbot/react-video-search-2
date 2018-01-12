import React from 'react'
import ReactDOM from 'react-dom'

// Create a new component. This should produce some HTMl

const App = () => {
    return <div>Hello!</div>;
}

// Take generated componented and place it on the DOM

ReactDOM.render(<App />, document.querySelector('.container'))