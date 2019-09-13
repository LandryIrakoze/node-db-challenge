
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resource').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resource').insert([
        {id: 1, name: 'resource1', description: 'description1' },
        {id: 2, name: 'resource2', description: 'description2' },
        {id: 3, name: 'resource3', description: 'description3' },

      ]);
    });
};
