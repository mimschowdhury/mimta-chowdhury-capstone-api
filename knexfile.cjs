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

require('dotenv').config(); // Load env vars for CommonJS

// Helper function to parse DATABASE_URL for production
function parseDatabaseUrl(databaseUrl) {
  try {
    const url = new URL(databaseUrl);
    return {
      client: 'mysql2',
      connection: {
        host: url.hostname,
        port: url.port || 3306, // Default MySQL port
        user: url.username,
        password: url.password,
        database: url.pathname.replace('/', ''), // Remove leading slash
        charset: 'utf8',
      },
      pool: { min: 2, max: 10 },
      migrations: { tableName: 'knex_migrations' },
    };
  } catch (error) {
    console.error('Error parsing DATABASE_URL:', error.message);
    throw error;
  }
}

// Base configuration for local development
const baseConfig = {
  client: 'mysql2',
  connection: {
    host: process.env.DB_HOST || '127.0.0.1',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'rootroot',
    database: process.env.DB_NAME || 'cafes',
    charset: 'utf8',
  },
  pool: { min: 2, max: 10 },
  migrations: { tableName: 'knex_migrations' },
};

module.exports = {
  development: baseConfig,

  production: process.env.DATABASE_URL
    ? parseDatabaseUrl(process.env.DATABASE_URL)
    : baseConfig, // Fallback for testing, but should use DATABASE_URL on Heroku
};