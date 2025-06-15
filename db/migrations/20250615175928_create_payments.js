/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('payments', function(table) {
    table.increments('id').primary();                                 // id integer [primary key, increment]
    table.integer('user_id').notNullable().comment('quem realizou o pagamento');  // user_id integer [not null, note: ...]
    table.integer('user_control').comment('usuário que criou o registro');        // user_control integer [note: ...]
    table.float('value').notNullable();                               // value real [not null]
    table.text('receipt').notNullable();                              // número do recibo [not null]
    table.text('obs');                                                // obs text
    table.timestamp('paymentdate').notNullable();                     // paymentdate timestamp [not null]
    table.boolean('verified').defaultTo(false).comment('verificado'); // verified boolean [default: false, note: ...]
    table.text('photo').comment('link para foto do comprovante');     // photo text [note: ...]
    table.timestamp('created_at').defaultTo(knex.fn.now());           // created_at timestamp [default: CURRENT_TIMESTAMP]
    table.timestamp('updated_at');                                    // updated_at timestamp

    // Índices extras
    table.index(['paymentdate'], 'all payment of date');              // (paymentdate) [name: 'all payment of date']
    table.index(['value'], 'range of value');                         // (value) [name: 'range of value']
    table.index(['paymentdate', 'value'], 'all payment beetweend date and value'); // (paymentdate, value) [name: 'all payment beetweend date and value']
  });
};


/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('payments');
};
