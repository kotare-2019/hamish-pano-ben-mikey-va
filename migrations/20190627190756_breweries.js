
exports.up = (knex, Promise) => {
  return knex.schema.createTable('breweries', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('city')
    table.string('country')
    table.string('website')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('breweries')
}