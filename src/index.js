import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component, this should produce some html
const App = () => {
  return <div>Hi there!</div>;
}

// Take this component's generated html and put in on the page, in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));