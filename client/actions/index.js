import { getPlayers, postPlayer } from '../apis/api'

// consts
export const SAVE_ALL_PLAYERS = 'SAVE_ALL_PLAYERS'
export const RECEIVE_NEW_PLAYER = 'RECEIVE_NEW_PLAYER'
export const ADD_TO_TEAM = 'ADD_TO_TEAM'
export const REMOVE_FROM_TEAM = 'REMOVE_FROM_TEAM'

// funcs
export function saveAllPlayers(players) {
  return {
    type: SAVE_ALL_PLAYERS,
    players,
  }
}

export function receiveNewPlayer(player) {
  return {
    type: RECEIVE_NEW_PLAYER,
    player,
  }
}

export function sendError(msg) {
  return {
    type: 'ERROR',
    msg,
  }
}

export const addToTeam = (id, name, position, img) => {
  return {
    type: ADD_TO_TEAM,
    newPlayer: {
      id: id,
      position: position,
      name: name,
      img: img,
      quantity: 1,
    },
  }
}

export const removeFromTeam = (id) => {
  return {
    type: REMOVE_FROM_TEAM,
    id: id,
  }
}

// thunks

export function getPlayersThunk() {
  return (dispatch) => {
    getPlayers()
      .then((players) => {
        dispatch(saveAllPlayers(players))
      })
      .catch((err) => {
        dispatch(sendError(err.message))
      })
  }
}

export function savePlayerThunk(player) {
  return (dispatch) => {
    postPlayer(player)
      .then((playerObj) => dispatch(receiveNewPlayer(playerObj)))
      .catch((err) => {
        dispatch(sendError(err.message))
      })
  }
}
