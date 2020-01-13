import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { anotherName } from './actions/myaction';
function App(props) {
  console.log(props)
  return (
    <div className="App">
      <h1>I am app component</h1>
      <h2>My name is {props.myName}</h2>
      <button onClick={() => props.changeName()}>Change it</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myName: state.name
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeName:() => {dispatch(anotherName())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
