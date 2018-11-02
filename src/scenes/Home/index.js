import React, { Component } from 'react';
import logo from './images/logo.svg';
import './styles.scss';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Home</h1>
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
}

export default Home;
