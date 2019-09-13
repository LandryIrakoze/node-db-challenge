
exports.up = function(knex) {
    return knex.schema
        .createTable('project', () => {
            tbl
                .increments();
            tbl
                .string('name', 128)
                .notNullable();
            tbl
                .string('description', 128);
            tbl
                .boolean('isCompleted', false);
        })
        .createTable('task', () => {
            tbl
                .increments();
            tbl
                .string('description', 128)
                .notNullable();
            tbl
                .string('notes', 128)
            tbl
                .boolean('isCompleted', false);
            tbl
                .integer('project_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('project')
                .onUpdate('CASCADE')
                .onDelete('CASCADE')
        })
        .createTable('resource', () => {
            tbl
                .increments();
            tbl
                .string('name', 128)
                .notNullable()
                .unique();
            tbl
                .string('description', 128)
        })
        .createTable('project_resources', () => {
            tbl
                .increments();
            tbl
                .integer('project_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('project')
                .onUpdate('CASCADE')
                .onDelete('CASCADE')
            tbl
                .integer('resource_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('resource')
                .onUpdate('CASCADE')
                .onDelete('CASCADE')
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('project_resources')
        .dropTableIfExists('resources')
        .dropTableIfExists('tasks')
        .dropTableIfExists('project')
};
