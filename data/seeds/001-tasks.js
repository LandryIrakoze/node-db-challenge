
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('task').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('task').insert([
        {id: 1, description: 'task1 description', notes: 'task1 notes', isCompleted: false, project_id: 1},
        {id: 2, description: 'task2 description', notes: 'task2 notes', isCompleted: false, project_id: 1},
        {id: 3, description: 'task3 description', notes: 'task3 notes', isCompleted: false, project_id: 1},
        {id: 4, description: 'task1 description', notes: 'task1 notes', isCompleted: false, project_id: 2},
        {id: 5, description: 'task2 description', notes: 'task2 notes', isCompleted: false, project_id: 2},
        {id: 6, description: 'task3 description', notes: 'task3 notes', isCompleted: false, project_id: 2},
        {id: 7, description: 'task1 description', notes: 'task1 notes', isCompleted: false, project_id: 3},
        {id: 8, description: 'task2 description', notes: 'task2 notes', isCompleted: false, project_id: 3},
        {id: 9, description: 'task3 description', notes: 'task3 notes', isCompleted: false, project_id: 3},
      ]);
    });
};
