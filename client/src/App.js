import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import PlayerCard from "./Components/PlayerCard"

  class App extends Component {
  
    state = {
      players : [],
    }
  
    componentDidMount() {
      axios
        .get('http://localhost:5000/api/players')
        .then(response => {
            console.log(` data from CDM`, response.data);
            this.setState({
              players : response.data
            })
        })
          .catch(error => {
              console.log("The data was not returned", error);
        })
      };

  render() {
    return (
    <div className="App">
      <header className="App-header">
        <p>
          World Cup Google Searches
        </p>
      </header>
      <PlayerCard 
        players = {this.state.players}
      />

    </div>
  );
  };
}

export default App;
