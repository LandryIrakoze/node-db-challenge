
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
        {id: 1, name: 'project1', description: 'project1 description', isCompleted: false},
        {id: 2, name: 'project2', description: 'project2 description', isCompleted: false},
        {id: 3, name: 'project3', description: 'project3 description', isCompleted: false},
      ]);
    });
};
