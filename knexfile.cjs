// // Import dotenv to process environment variables from `.env` file.
// import "dotenv/config";

// export default {
//   client: "mysql2",
//   connection: {
//     host: process.env.DB_HOST,
//     database: process.env.DB_NAME,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     charset: "utf8",
//   },
// };

import 'dotenv/config'; // Use `import` for loading environment variables
import knex from 'knex';  // To use knex for connection URL parsing (optional)

// Helper function to parse the DATABASE_URL into an object
function parseDatabaseUrl(databaseUrl) {
  const url = new URL(databaseUrl);
  return {
    client: 'mysql2',
    connection: {
      host: url.hostname,
      port: url.port,
      user: url.username,
      password: url.password,
      database: url.pathname.split('/')[1], // Extracts database name from the URL
    },
  };
}

export default {
  development: {
    client: 'mysql2',
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    },
    pool: { min: 2, max: 10 },
    migrations: { tableName: 'knex_migrations' },
  },

  production: process.env.DATABASE_URL
    ? parseDatabaseUrl(process.env.DATABASE_URL)
    : {
        client: 'mysql2',
        connection: {
          host: process.env.DB_HOST,
          user: process.env.DB_USER,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_NAME,
        },
      },
};