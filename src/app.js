import React from 'react';

import Header from './components/header.js';
import Footer from './components/footer.js';

import './app.scss';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  handleIncrementCounter = event => {
    event.preventDefault();
    const count = this.state.counter + 1;
    this.setState({counter: count});
  };

  handleDecrementCounter = event => {
    event.preventDefault();
    const count = this.state.counter - 1;
    this.setState({counter: count});
  };

  render() {
    return (
      <div className="mainContent">
        <a href="/" onClick={this.handleIncrementCounter}> Counter + </a>
        <h4>{this.state.counter}</h4>
        <a href="/" onClick={this.handleDecrementCounter}> Counter - </a>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Counter />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
