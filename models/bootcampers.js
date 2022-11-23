import { pool } from '../db/index.js';

export async function getBootcampers() {
  const result = await pool.query('SELECT * FROM bootcampers;');
  return result.rows;
}

export async function getBootcamperByName(name) {
  const result = await pool.query(`SELECT * FROM bootcampers WHERE name = $1`, [
    name,
  ]);
  return result.rows[0];
}

export async function addNewBootcamper(name) {
  const result = await pool.query(
    `INSERT INTO bootcampers (name) VALUES($1) RETURNING *`,
    [name]
  );
  return result.rows[0];
}

export async function name(params) {}
