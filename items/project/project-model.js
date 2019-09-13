const db = require('../../data/db-config');

module.exports = {
    find,
    findById,
    add,
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
function add(data) {
    return db('project')
        .insert(data)
        .then(ids => {
            return findById(ids[0])
        })
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