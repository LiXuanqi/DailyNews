import React, { Component } from 'react';
import './App.css';
import NewsPanel from '../NewsPanel/NewsPanel';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="container">
          <NewsPanel />
        </div>
      </div>
    );
  }
}

export default App;
