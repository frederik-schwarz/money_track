
exports.up = function(knex) {
  return knex.schema.createTable('budgetDay', function(table) {
      table.increments('id').primary()
      table.integer('budget')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('budgetDay')
};
