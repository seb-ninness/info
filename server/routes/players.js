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

// router.post('/', (req, res) => {
//   const addWish = req.body
//   console.log(addWish)

//   db.saveWish(addWish)
//     .then((wish) => {
//       res.json(wish)
//     })
//     .catch((err) => {
//       res.status(500).json({ error: err.message })
//     })
// })

module.exports = router
