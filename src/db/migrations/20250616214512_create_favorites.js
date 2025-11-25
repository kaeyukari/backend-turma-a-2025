/**
 * @param { import("knex").Knex } knex
 */
export function up(knex) {
  return knex.schema.createTable('favorites', (table) => {
    table.increments('id').primary();

    table
      .integer('user_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE');

    table
      .integer('skin_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('skins')
      .onDelete('CASCADE');

    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());

    table.unique(['user_id', 'skin_id'], {
      indexName: 'unique_user_skin'
    });
  });
}

export function down(knex) {
  return knex.schema.dropTable('favorites');
}
