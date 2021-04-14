import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Popular from './components/Popular';
import Battle from './components/Battle';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <Popular />
        <Battle />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
