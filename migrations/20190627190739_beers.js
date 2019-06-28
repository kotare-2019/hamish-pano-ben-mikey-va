
exports.up = (knex, Promise) => {
  return knex.schema.createTable('beers', (table) => {
    table.increments('id').primary()
    table.integer('brewery_id')
    table.string('name')
    table.string('style')
<<<<<<< HEAD
    table.real('abv')
=======
    table.decimal('abv')
>>>>>>> c0c001813142e7bd8ab444c50d78017b8930c85e
    table.string('descript', 1000)
    table.integer('rating')
    table.string('loc_available')
    table.string('url')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('beers')
}
