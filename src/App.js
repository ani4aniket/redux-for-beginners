import React from 'react';
import './App.css';
import { connect } from 'react-redux';

function App(props) {
  console.log(props)
  return (
    <div className="App">
      <h1>I am app component</h1>
      <h2>My name is {props.myName}</h2>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myName: state.name
  }
}

export default connect(mapStateToProps)(App);
