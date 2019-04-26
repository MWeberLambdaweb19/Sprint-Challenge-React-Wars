import React, { Component } from 'react';
import './App.scss';
import CharacterList from './components/charList.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount() {
    console.log('This is component did mount!')
    this.getCharacters('https://swapi.co/api/people/','https://swapi.co/api/people/?page=2');
    console.log(this.getCharacters)
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
    
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log('This is .then!')
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    console.log(<CharacterList />)
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <CharacterList listResults={this.state.starwarsChars} /> 
      </div>
    );
  }
}

export default App;
