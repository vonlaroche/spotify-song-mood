import { START_TEST } from '../actions';

const defaultState = {
  status: 'failed'
}

const startSet = state => {
  return {
    ...state,
    status: 'success'
  }
}

export function testStore(state = defaultState, action) {
  switch (action.type) {
    case START_TEST: 
      return startSet(state)
    default:
      return state;
  }
}