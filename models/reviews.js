import { pool } from '../db/index.js';

export async function getReviews() {
  const result = await pool.query('SELECT * FROM reviews;');
  return result.rows;
}

export async function getReviewById(id) {
  const result = await pool.query(`SELECT * FROM reviews WHERE id = $1`, [id]);
  return result.rows[0];
}

export async function addReview(body) {
  const result = await pool.query(
    `INSERT INTO reviews (topic_id, score, date_added, bootcamper_id) VALUES($1,$2,$3,$4) RETURNING *`,
    [body.topic_id, body.score, body.date_added, body.bootcamper_id]
  );
  return result.rows[0];
}

export async function updateReview(id, score) {
  const result = await pool.query(
    `UPDATE reviews SET score = $1 WHERE id = $2`,
    [score, id]
  );
  return result.rows[0];
}
