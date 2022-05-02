exports.up = function (knex) {
  return knex.schema.createTable('players', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('position')
    table.string('img')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('players')
}
