// const knex = require('knex')(require('./knex.config.js'));

exports.up = function(knex) {
  return knex.schema.createTable('${QUIZ_NAME}_stimulusResponses', table => {
    table.increments('id').primary();
    table.integer('user_id').references('id').inTable('${QUIZ_NAME}_users').notNullable();
    table.integer('stimulus').references('id').inTable('${QUIZ_NAME}_stimuli').notNullable();
    table.json('response').notNullable();
    table.timestamp('created_at').notNullable();
    table.timestamp('updated_at');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('${QUIZ_NAME}_stimulusResponses');
};
