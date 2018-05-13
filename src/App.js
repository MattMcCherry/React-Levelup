import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Movie from './movie';

class App extends Component {

  state = {
    movies: []
  }

  async componentDidMount() {
    try {
      const url = "https://api.themoviedb.org/3/discover/movie?api_key=d033296ae7302fbf5213060b2d508924";
      const res = await fetch(url);
      const movies = await res.json();
      this.setState({
        movies: movies.results
      })
    } catch(e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        {this.state.movies.map(movie => <Movie key={movie.id} movie={movie} desc={movie.desc}/>)}
      </div>
    );
  }
}

export default App;