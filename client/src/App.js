import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import PlayerCardList from "./Components/PlayerCardList";

  class App extends Component {
  
    state = {
      players : [],
    }
  
    componentDidMount() {
      axios
        .get('http://localhost:5000/api/players')
        .then(response => {
            console.log(`data from CDM`, response.data);
            this.setState({
              players : response.data
            })
        })
          .catch(error => {
              console.log("The data was not returned", error);
        })
      };

  render() {
  console.log(this.state.players)
    return (
    <div className="App">
        <div className="App-header">
        <p>
          Women's World Cup Google Searches
        </p>
        </div>

      <div className="list" >
      <PlayerCardList
        players={this.state.players}
      />
      </div>
    </div>
  );
  };
}

export default App;
