const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)



function getAllBeers(db = connection) {
  return db('beers').select()
}

function getBeerById(id, db = connection) {
  return db('beers').where('id', id).select().first()
}

function getAllPubs(db = connection) {
  return db('beers_location').select()
}

module.exports = {
  getAllBeers,
  getBeerById,
  getAllPubs
}