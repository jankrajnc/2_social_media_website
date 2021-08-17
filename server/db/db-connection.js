/* This structure has only one location where the application connects to the database.
   So if we ever want to improve our query handling with some logging, 
   we don't need to change multiple locations, just this one.
*/

// PostgreSQL library.
const { Pool } = require('pg');
const logger = require("../utils/log-util").getLogger();

// Database connection object.
const pgPool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'social_media_website',
  password: "root",
  port: 5432,
  max: 3
});

// The pool will emit an error on behalf of any idle clients. Used if a backend error or network partition happens.
pgPool.on('error', (err, client) => {
  logger.error('Unexpected error on idle client', err);
  process.exit(-1);
});

// Master query function, all queries run through here.
async function query(sqlQuery, params) {
  const pgClient = await pgPool.connect();
  try {
    logger.info(JSON.stringify(params));
    const dbResult = await pgClient.query(sqlQuery, params);
    return dbResult;
  } catch (err) {
    logger.error(err.stack);
  } finally {
    pgClient.release();
  }
}

// Query to be fed from other files (routes).
module.exports = {
  query
}
