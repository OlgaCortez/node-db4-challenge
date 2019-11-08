exports.up = function(knex) {
    return knex.schema.createTable('recipes', tbl => {
        tbl.increments();
        
        tbl
        .integer('ingredients_id')
        .unsigned()
        .references('id')
        .inTable('ingredients')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');

        tbl
        .integer('instructions_id')
        .unsigned()
        .references('id')
        .inTable('instructions')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');

        tbl.string('recipe_name', 255).notNullable();
    })
    .createTable('ingredients', tbl => {
        tbl.increments();
      
        tbl
        .integer('recipe_id')
        .unsigned()
        .references('id')
        .inTable('recipes')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');

        tbl
        .integer('instructions_id')
        .unsigned()
        .references('id')
        .inTable('instructions')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');

        tbl.string('ingredients', 500);
        tbl.float('measurments');
    })
    .createTable('instructions', tbl => {
        tbl.increments();
        
        tbl
        .integer('recipe_id')
        .unsigned()
        .references('id')
        .inTable('recipes')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');

        tbl
        .integer('ingredients_id')
        .unsigned()
        .references('id')
        .inTable('ingredients')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');

        tbl.string('instructions', 500);
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('instructions')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipe');
};
