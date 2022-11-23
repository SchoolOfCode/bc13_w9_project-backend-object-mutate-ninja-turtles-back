import { pool } from '../db/index.js';

export async function getReviews() {
  const result = await pool.query('SELECT * FROM reviews;');
  return result.rows;
}

export async function getReviewById(id) {
  const result = await pool.query(`SELECT * FROM reviews WHERE id = $1`, [id]);
  return result.rows[0];
}

export async function addReview(score, date) {
  const result = await pool.query(
    `INSERT INTO reviews (score, date_added) VALUES($1,$2) RETURNING *`,
    [score, date]
  );
  return result.rows[0];
}

export async function updateReview(id, score) {
  const result = await pool.query(`UPDATE reviews SET score = ${score}`);
  return result.rows[0];
}
