import footy from './players'
import { combineReducers } from 'redux'
import team from './newTeam'

export default combineReducers({
  footy,
  team,
})
