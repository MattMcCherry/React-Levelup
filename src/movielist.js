import React, { Component } from 'react';
import Movie from './movie';

class MoviesList extends Component {
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
      <div>
        {this.state.movies.map(movie => <Movie key={movie.id} movie={movie} desc={movie.desc} />)}
      </div>
    );
  }
}

export default MoviesList;
