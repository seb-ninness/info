const connection = require('./connection')

function getPlayers(db = connection) {
  return db('players').select()
}

function savePlayer(playerObj, db = connection) {
  return db('players').insert(playerObj)
}

module.exports = {
  getPlayers,
  savePlayer,
}
