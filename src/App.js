import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Projects from './Component/Projects';
import 'bootstrap/dist/css/bootstrap.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faStroopwafel, faTimes, faPlusCircle  } from '@fortawesome/free-solid-svg-icons';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          Favorite Food: <FontAwesomeIcon icon="stroopwafel" />
        </div>
        <Projects />
      </div>
    );
  }
}

library.add(faCoffee, faTimes, faPlusCircle, faStroopwafel);

export default App;
