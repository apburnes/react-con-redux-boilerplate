import React, { Component } from 'react';
import { connect } from 'react-redux';
import Logo from '../../img/logo.png';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <img className="logo" src={Logo} />
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
