import { pool } from '../db/index.js';

async function getTopics() {
  const result = await pool.query('SELECT * FROM topics;');
  return result.rows;
}
