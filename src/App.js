import './App.css';
import React, { Component } from 'react';
import 'isomorphic-fetch';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      weather: [],
      city: '',
      temp: ''
    }
  }  

  componentDidMount() {
    const api = process.env.WEATHER_API_KEY;
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=London&appid=${api}&units=metric`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            weather: result.weather,
            city: result.name,
            temp: result.main.temp
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const {error, isLoaded, weather} = this.state;

    if (error){
      return(
        <div>
          Error : {error.message}
        </div>
      );
    }else if (!isLoaded){
      return (
        <div>
          Loading...
        </div>
      );
    }else{
      return(
        <div>
          <h1>{this.state.city}</h1>
          {weather.map(weather => (
            <div>              
              <h2>{weather.description}</h2>
            </div>
          ))}
          <h2>{this.state.temp}</h2>
        </div>
      )
    }
  }
}

export default App;