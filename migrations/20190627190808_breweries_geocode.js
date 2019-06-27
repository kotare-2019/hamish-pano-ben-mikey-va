
exports.up = (knex, Promise) => {
  return knex.schema.createTable('breweries_geocode', (table) => {
    table.increments('id').primary()
    table.integer('brewery_id')
    table.real('latitude')
    table.real('longitude')
    table.string('accuracy')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('breweries_geocode')
}