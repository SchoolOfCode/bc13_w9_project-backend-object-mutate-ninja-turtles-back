import { pool } from '../db/index.js';

async function getReviews() {
  const result = await pool.query('SELECT * FROM reviews;');
  return result.rows;
}
