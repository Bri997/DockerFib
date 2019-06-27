import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowerRouter as Router, Route, Link} from "react-router-dom"
import Fib from "./Fib"
import OtherPage from "./OtherPage"

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <Route exact path="/" component={Fib}></Route>
          
          </div>
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
    </Router>
  );
}

export default App;
