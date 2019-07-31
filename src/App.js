import React from 'react';

import { createStore } from 'redux';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

const defaultState = {
  welcome: 'Hi',
  otherState: 'some stuff',
  otherStates: 'some other stuff',
};

// First reducer(a function, takes previous state, merges changes, outputs new state object) :3
const greeting = (state = defaultState, action) => {
  switch (action.type) {
    case 'GREET_NAME':
      return { ...state, welcome: `Hello ${action.name}` };
    case 'GREET_WORLD':
      return { ...state, welcome: 'Hello World' };
    default:
      return state;
  }
};

const store = createStore(greeting);

console.log(store.getState());

const name = 'Aaron';

// Action - simply just an object, must dispatch for it to do anything
store.dispatch({
  type: 'GREET_NAME',
  name,
});

console.log(store.getState());

store.dispatch({
  type: 'GREET_NAME',
  name: 'Nora',
});

console.log(store.getState());
