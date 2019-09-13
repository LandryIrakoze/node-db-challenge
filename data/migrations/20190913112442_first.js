
exports.up = function(knex) {
    return knex.schema
        .createTable('project', tbl => {
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
        .createTable('task', tbl => {
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
        .createTable('resource', tbl => {
            tbl
                .increments();
            tbl
                .string('name', 128)
                .notNullable()
                .unique();
            tbl
                .string('description', 128);
        })
        .createTable('resourcesProjects', tbl => {
            tbl
                .increments();
            tbl
                .integer('project_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('project')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            tbl
                .integer('resource_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('resource')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('resourcesProjects')
        .dropTableIfExists('resource')
        .dropTableIfExists('task')
        .dropTableIfExists('project')
};
