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

require('dotenv').config();

module.exports = {
  development: {
    client: 'mysql2',
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    },
    pool: { min: 2, max: 10 },
    migrations: { tableName: 'knex_migrations' }
  },

  production: {
    client: 'mysql2',
    connection: process.env.DATABASE_URL, // Use the Heroku DB in production
    pool: { min: 2, max: 10 },
    migrations: { tableName: 'knex_migrations' }
  }
};