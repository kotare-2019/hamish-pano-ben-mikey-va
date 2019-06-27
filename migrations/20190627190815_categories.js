
exports.up = (knex, Promise) => {
  return knex.schema.createTable('categories', (table) => {
    table.increments('id').primary()
    table.string('cat_name')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('categories')
}