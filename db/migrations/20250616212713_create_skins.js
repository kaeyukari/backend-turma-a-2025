/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('skins', (table) => {
    table.increments('id').primary();
    table.text('name').notNullable();
    table.text('description').defaultTo('');
    table.text('image_url').notNullable();
    table.string('species_class').notNullable().comment('vampiro, mago, lobisomem, cavaleiro, centauro');
    table.boolean('is_official').defaultTo(false);
    table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at');
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('skins');
}
