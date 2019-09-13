const db = require('../../data/db-config');

module.exports = {
    find,
    findById,
    findTasks,
    add,
    addTask,
    editTask,
    update,
    remove
}

function find() {
    return db('project')
}
function findById(id) {
    return db('project')
        .where({ id })
        .first()
}
function findTasks(id) {
    return db('task')
        .join('project', 'task.project_id', 'project.id')
        .where('project.id', id)
        .select('project.name', 'task.description', 'task.notes', 'task.isCompleted')
}
function add(data) {
    return db('project')
        .insert(data)
        .then(ids => {
            return findById(ids[0])
        })
}
function addTask(data, id) {
    return db('task')
        .where({ id })
        .insert(data)
        .then(ids => {
            return findById(ids[0])
        })
}
function editTask(changes, id) {
    return db('task')
        .where({ id })
        .update(changes)
}
function update(changes, id) {
    return db('project')
        .where({ id })
        .update(changes)
}
function remove(id) {
    return db('project')
        .where('id', id)
        .del()
}