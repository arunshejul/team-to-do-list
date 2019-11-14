import React, { Component } from 'react';
import Header from './components/Header';
import Home from './containers/Home';
import Profile from './containers/Profile';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="column column-25">
              <Profile />
            </div>
            <div className="column">
              <div className="row">
                <Header />
              </div>
              <div className="row">
                <Home />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;