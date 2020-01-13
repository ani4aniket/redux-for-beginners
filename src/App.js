import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { anotherName, addWish } from './actions/myaction';
function App(props) {
  console.log(props);
  const mywish = props.myWish.map(item => {
    return <h2 key={Math.random()}>{item}</h2>
  });

  return (
    <div className="App">
      <h1>========= App component =========</h1>
      <h2>My name is {props.myName}</h2>
      {mywish}
      <button onClick={() => props.changeName()}>Change it</button>
      <button onClick={() => props.addWish()}>Add wish</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myName: state.name,
    myWish: state.wish
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeName:() => {dispatch(anotherName())},
    addWish:() => {dispatch(addWish())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
