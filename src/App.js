import './App.css';
import React, { Component } from 'react';
import 'isomorphic-fetch';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      weather: [],
      city: '',
      temp: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }  

  handleChange(event) {
    this.setState({city: event.target.value});
    event.preventDefault();
  }

  handleClick() {
    const api = process.env.REACT_APP_WEATHER_API_KEY;
    const city = this.state.city;
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            weather: result.weather,
            city: result.name,
            temp: result.main.temp
          });
        },
        (error) => {
          this.setState({
            error
          });
        }
      )
  }

  render() {
    const {error, weather} = this.state;

    if (error){
      return(
        <div>
          Error : {error.message}
        </div>
      );
    }else{
      return(
        <div id="wrapper">
          <label>Select a city : </label>
          <input type="text" onChange={this.handleChange}/>
          <button type="submit" onClick={this.handleClick}>Submit</button>
          <h1>{this.state.city}</h1>
          {weather.map(weather => (
            <div>              
              <h2>{weather.description}</h2>
            </div>
          ))}
          <h2>{this.state.temp} Celsius</h2>
        </div>
      )
    }
  }
}

export default App;