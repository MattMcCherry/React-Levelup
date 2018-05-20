import React, { Component } from 'react';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';

class MovieDetail extends Component {
  state = {
    movie: {},
  };

  async componentDidMount() {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${
          this.props.match.params.id
        }?api_key=d033296ae7302fbf5213060b2d508924`
      );
      const movie = await res.json();
      this.setState({
        movie,
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const { movie } = this.state;
    const bgStyle = {
      backgroundImage: `url(${BACKDROP_PATH}${movie.backdrop_path})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      opacity: 1,
      height: '100vh',
      width: '100%',
      padding: '20px 0',
    };
    const pStyle = {
      color: '#fff',
    };
    const wrapperStyle = {
      width: '100%',
      background: 'rgba(1,1,1,0.5)',
      padding: '20px 10px',
    };
    return (
      <div style={bgStyle}>
        <img src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
        <div style={wrapperStyle}>
          <h1 style={pStyle}>{movie.title}</h1>
          <h3 style={pStyle}>{movie.release_date}</h3>
          <p style={pStyle}>{movie.overview}</p>
        </div>
      </div>
    );
  }
}

export default MovieDetail;
