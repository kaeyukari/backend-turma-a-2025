export default {
  development: {
    client: "pg",
    connection: {
      host: process.env.PG_HOST || "localhost",
      user: process.env.PG_USER || "postgres",
      password: process.env.PG_PASSWORD || "postgres",
      database: process.env.PG_DATABASE || "skinsdb",
      port: process.env.PG_PORT || 5432
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./src/migrations"
    }
  },

  production: {
    client: "pg",
    connection: {
      host: process.env.PG_HOST,
      user: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DATABASE,
      port: process.env.PG_PORT
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./src/migrations"
    }
  }
};
