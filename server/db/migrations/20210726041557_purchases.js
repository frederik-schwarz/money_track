
exports.up = function(knex) {
  return knex.schema.createTable('purchases', function (table) {
      table.increments('id').primary()
      table.string('purchased')
      table.integer('price')
      table.integer('importance')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('purchases')
};
