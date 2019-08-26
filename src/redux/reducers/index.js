import { combineReducers } from 'redux'
import auth from './auth'
import database from './database'

export default combineReducers({
  auth,
  database
})