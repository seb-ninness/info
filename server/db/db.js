const config = require('../../knexfile').development
const connection = require('knex')(config)

function getPlayers(db = connection) {
  return db('player').select()
}

// function saveWish(wishObj, db = connection) {
//   return db('wishes').insert(wishObj)
// }

module.exports = {
  getPlayers,
}
