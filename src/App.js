import './App.css';
import React, { Component } from 'react';
import 'isomorphic-fetch';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      weather: []
    }
  }

  componentDidMount() {
    fetch("")
  }
}

export default App;