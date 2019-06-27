
exports.up = (knex, Promise) => {
  return knex.schema.createTable('breweries', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('city')
    table.string('country')
    table.string('url')
    table.string('lat_long_wsg84')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('breweries')
}