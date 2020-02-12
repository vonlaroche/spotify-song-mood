import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from './actions'
import './App.css';

const App = props => {

  const onChangeSatusClick = () => props.actions.startTest()

  return (
    <div className="App">
     App
     <br/>
     {props.testStore.status}
     <br/>
     <button onClick={onChangeSatusClick}> Change status </button>
    </div>
  );
}

export default connect(
  state => ({
   testStore: state.testStore
  }),
  dispatch => ({
    actions: bindActionCreators(Actions, dispatch),
  })
)(App)
