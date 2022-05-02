import { ADD_TO_TEAM, REMOVE_FROM_TEAM } from '../actions'

function team(currentState = [], action) {
  switch (action.type) {
    case ADD_TO_TEAM:
      return [...currentState, action.newPlayer]

    case REMOVE_FROM_TEAM:
      return currentState.filter((item) => item.id !== action.id)

    default:
      return currentState
  }
}

export default team
