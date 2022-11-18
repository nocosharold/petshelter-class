import Movies from './components/movies';
import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        <main className="container">
          <Movies />
        </main>
      </div>
    )
  }
}

