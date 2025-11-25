/**
 * @param { import("knex").Knex } knex
 */
export function up(knex) {
  return knex.schema.createTable('skins', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.text('description').defaultTo('');
    table.text('image_url').notNullable();

    table.enu('species_class',
      ['vampiro', 'mago', 'lobisomem', 'cavaleiro', 'centauro'],
      { useNative: true, enumName: 'species_type' }
    ).notNullable();

    table.boolean('is_official').defaultTo(false);
    table
      .integer('user_id')
      .unsigned()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE');

    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
}

export function down(knex) {
  return knex.schema
    .dropTable('skins')
    .raw('DROP TYPE IF EXISTS species_type');
}
