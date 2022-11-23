import { pool } from '../db/index.js';

export async function getTopics() {
  const result = await pool.query('SELECT * FROM topics;');
  return result.rows;
}

export async function getTopicByTitle(title) {
  const result = await pool.query(
    `SELECT * FROM topics WHERE subject_title = $1`,
    [title]
  );
  return result.rows[0];
}
