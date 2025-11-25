/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return knex('users').insert({
    username: 'admin',
    email: 'admin@admin.com',
    password: 'admin',
    role: 'admin'
  });
}

export async function down(knex) {
  return knex('users')
    .where({ email: 'admin@admin.com' })
    .del();
}
