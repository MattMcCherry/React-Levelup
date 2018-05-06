import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    input: 'Hello'
  }

  updateInput = (e) => {
    this.setState({ input: e.target.value.trim() });
  }

  submit = () => {
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Welcome text="Welcome to React" />
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h3>{this.state.input}</h3>
        <input type="text" onChange={this.updateInput} value={this.state.input} />
        <input type="text" ref={(input) => this.text = input}/>
        <button onClick={this.submit}>Show Value</button>
      </div>
    );
  }
}

class Welcome extends Component {
  render() {
    const { text, toggle } = this.props;
    return (
      <h1 className="App-title">{text}</h1>
    );
  }
}

export default App;