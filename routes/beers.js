const express = require('express')
const router = express.Router()

const db = require('../db')

router.get('/', (req, res) => {
  db.getAllBeers()
    .then(beers => {
      res.send(beers)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.get('/:id', (req, res)=>{
  db.getBeerById(req.params.id)
  .then(beer =>{
    res.send(beer)
  })
  .catch(err => {
    res.status(500).send(err.message)
  })
})