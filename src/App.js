import React, { Component } from 'react';
import './App.css';

import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state ={
      name: '',
      picture: ''
    }
  }

  componentDidMount() {
    // Axios Request
    // axios.get('http://pokeapi.salestock.net/api/v2/pokemon/65')
    //      .then(response => {
    //        console.log('response.data', response.data)
    //        this.setState({
    //          name: response.data.name,
    //          picture: response.data.sprites.front_default,
    //        })
    //      })
    //      .catch(error => console.log('Axios Error GET', error))

    // Fetch 
    fetch('http://pokeapi.salestock.net/api/v2/pokemon/428', {
      // second parameter is an init object that allows you to control different settings
      method: "GET", 
      mode: "cors",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    })
      .then(response => {
        // Checking to see if response.ok is true
        if (response.ok) {
          return response.json();
        }
        // If response was not ok, throw an error
        throw new Error('Network response was not ok')
      })
      .then(data => {
        // If want the entire data back as a string, can do JSON.stringify()
        console.log('JSON.stringify', JSON.stringify(data))
        console.log(typeof JSON.stringify(data)) // data is a string
        this.setState({
          name: data.name,
          picture: data.sprites.front_default,
        })
      })
      .catch(error => console.log('Fetch error:', error.message))
   
  }
  render() {
    return (
      <div className="App">
       Promise Practice
       <h1>Pokemon</h1>
       <h3>Name: {this.state.name}</h3>
        {this.state.picture ? <img src={this.state.picture} alt="pokemon"/> : ''}
      </div>
    );
  }
}

export default App;
