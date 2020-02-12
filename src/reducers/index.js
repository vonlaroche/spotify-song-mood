/**
 * Libraries
 */

import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import {testStore} from './start-test.reducer'

/**
 * Exports
 */

export default history =>
  combineReducers({
    router: connectRouter(history),
    testStore,
  })
