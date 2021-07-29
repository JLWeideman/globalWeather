import './App.css';
import React, { Component } from 'react';
import 'isomorphic-fetch';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      temp: '',
      precipitation: '',
      humidity: ''
    }
  }
}

export default App;