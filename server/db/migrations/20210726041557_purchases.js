
exports.up = function(knex) {
  return knex.schema.createTable('purchases', function (table) {
      table.increments('id').primary()
      table.string('purchased')
      table.integer('price')
      table.integer('importants')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('purchases')
};
