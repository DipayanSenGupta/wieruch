import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const user = {
    firstName: 'Dipayan',
    lastName: 'Sen Gupta'
  };
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
          Learn React {formatName(user)}
        </a>
      </header>
    </div>
  );
}

function formatName(user) {
  return user.firstName+ ' '+user.lastName;
}

export default App;
