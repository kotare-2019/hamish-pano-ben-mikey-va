
exports.up = (knex, Promise) => {
  return knex.schema.createTable('beers', (table) => {
    table.increments('id').primary()
    table.integer('brewery_id')
    table.string('name')
    table.integer('cat_id')
    table.integer('style_id')
    table.real('abv')
    table.string('decript')
    table.integer('rating')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('beers')
}