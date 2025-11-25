/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.string('username').notNullable();
    table.string('email').notNullable().unique();
    table.string('password').notNullable().defaultTo('123456');

    table.enu('role', ['admin', 'partial', 'user'], {
      useNative: true,
      enumName: 'user_role'
    }).defaultTo('user');

    table.text('photo');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());

    table.index('username', 'idx_username');
  });
}

export function down(knex) {
  return knex.schema
    .dropTable('users')
    .raw('DROP TYPE IF EXISTS user_role');
}
