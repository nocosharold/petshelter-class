import PetList from './components/petList';
import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        <main className="container">
          <PetList />
        </main>
      </div>
    )
  }
}

