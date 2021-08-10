
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('budgetDay').del()
    .then(function () {
      // Inserts seed entries
      return knex('budgetDay').insert([
        {id: 1, budget: 0},
      ]);
    });
};
