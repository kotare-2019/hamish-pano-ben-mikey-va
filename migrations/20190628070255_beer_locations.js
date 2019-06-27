
exports.up = (knex, Promise) => {
  return knex.schema.createTable('beer_locations', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('type')
    table.string('descript')
    table.integer('rating')
    table.string('lat_long_wsg84')
    table.string('url')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('beer_locations')
}