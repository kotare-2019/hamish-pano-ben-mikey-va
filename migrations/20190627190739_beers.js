
exports.up = (knex, Promise) => {
  return knex.schema.createTable('beers', (table) => {
    table.increments('id').primary()
    table.integer('brewery_id')
    table.string('name')
    table.string('style')
    table.decimal('abv')
    table.string('descript', 1000)
    table.integer('rating')
    table.string('loc_available')
    table.string('url')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('beers')
}