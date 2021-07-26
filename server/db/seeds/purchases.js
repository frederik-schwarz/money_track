
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('purchases').del()
    .then(function () {
      // Inserts seed entries
      return knex('purchases').insert([
        {id: 1, purchased: 'burger', price: 10, importants: 4},
        {id: 2, purchased: 'fries', price: 5, importants: 2},
        {id: 3, purchased: 'uber', price: 20, importants: 7}
      ]);
    });
};
