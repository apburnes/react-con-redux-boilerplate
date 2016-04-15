import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        { this.props.children }
      </div>
    );
  }
}

function select(state) {
  return {
    reduxState: state
  };
}

export default connect(select)(App);
