const express = require('express')
const router = express.Router()

const db = require('../db')

router.get('/', (req, res) => {
  db.getAllPubs()
    .then(pubs => {
      console.log('pubs route', pubs)
      res.send(pubs)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})


module.exports = router