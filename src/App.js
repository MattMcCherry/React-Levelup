import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Movie from './movie';

class App extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    try {
      const URL_PATH =
        'https://api.themoviedb.org/3/discover/movie?api_key=d033296ae7302fbf5213060b2d508924';
      const res = await fetch(URL_PATH);
      const movies = await res.json();
      this.setState({
        movies: movies.results,
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          {this.state.movies.map(movie => <Movie key={movie.id} movie={movie} desc={movie.desc} />)}
        </div>
      </Router>
    );
  }
}

export default App;
