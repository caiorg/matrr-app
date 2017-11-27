import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  getEnvValues = () => {
    if (!process.env.REACT_APP_PKG_TITLE) {
      throw new Error('Oops! It looks like `REACT_APP_PKG_TITLE` environment variable is missing in your .env file.');
    }

    const pkgTitle = process.env.REACT_APP_PKG_TITLE;

    return {pkgTitle};
  };

  render() {
    const { pkgTitle } = this.getEnvValues();

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to {pkgTitle}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
