import React, {useState} from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {energyInfo} from './enumerations'
import * as Actions from './actions'
import './App.css';


// const checkEnergy = (val) => {
//   if(val >= 0 && val <= 0.19){
//     //return 'Not energetic'
//     setEnergy('Not energetic')
//   }
//   else if ( val >= 0.2 && val <= 0.39){
//     return 'Almost energetic'
//   }
//   else if ( val >= 0.4 && val <= 0.59){
//     return 'Somewhat energetic'
//   }
//   else if ( val >= 0.6 && val <= 0.79){
//     return 'Energetic'
//   }
//   else{
//     return 'Very energetic'
//   }

// }


const App = props => {
  const [energy, setEnergy] = useState('Not energetic')
  const onChangeSatusClick = () => props.actions.startTest()
  

  const checkEnergy = (val) => {
    console.warn(val)
    if(val >= 0 && val <= 0.19){
  
      setEnergy(energyInfo[1])
    }
    else if ( val >= 0.2 && val <= 0.39){
      setEnergy(energyInfo[2])
    }
    else if ( val >= 0.4 && val <= 0.59){
      setEnergy(energyInfo[3])
    }
    else if ( val >= 0.6 && val <= 0.79){
      setEnergy(energyInfo[4])
    }
    else{
      setEnergy(energyInfo[5])
    }
  
  }

  return (
    <div className="App">
     App
     <br/>
     {props.testStore.status}
     <br/>
     <div>
     <button onClick={onChangeSatusClick}> Change status </button>
     </div>
    <div>
    <input type="text" placeholder="type a value..." onChange={event => checkEnergy(event.target.value)}/>
      <br/>
      <span>{energy}</span>
    </div>
       
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
