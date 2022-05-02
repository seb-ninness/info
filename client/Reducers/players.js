import { SAVE_ALL_PLAYERS, RECEIVE_NEW_PLAYER } from '../actions'

const initialState = []

function footy(state = initialState, action) {
  switch (action.type) {
    case SAVE_ALL_PLAYERS:
      return action.players

    case RECEIVE_NEW_PLAYER:
      return [...state, action.player]
    default:
      return state
  }
}

export default footy
