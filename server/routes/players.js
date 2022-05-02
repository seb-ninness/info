const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/', (req, res) => {
  db.getPlayers()
    .then((players) => {
      res.json(players)
      return null
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

router.post('/', (req, res) => {
  const addPlayer = req.body
  console.log(addPlayer)

  db.savePlayer(addPlayer)
    .then((id) => {
      res.json(id)
    })
    .catch((err) => {
      res.status(500).json({ error: err.message })
    })
})

module.exports = router
