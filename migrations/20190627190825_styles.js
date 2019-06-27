
exports.up = (knex, Promise) => {
  return knex.schema.createTable('styles', (table) => {
    table.increments('id').primary()
    table.integer('cat_id')
    table.string('style_name')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('styles')
}