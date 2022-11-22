

import { pool } from "./index.js";
import { seedData } from "./seed-data.js";

export async function createBootcampersTable() {
  return await pool.query(
    `CREATE TABLE IF NOT EXISTS bootcampers (
      id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      name VARCHAR(30) NOT NULL
    );`
  );
}

export async function dropBootcampersTable() {
  return await pool.query("DROP TABLE IF EXISTS bootcampers;");
}

export async function resetBootcampersTable() {
  return [
    await dropBootcampersTable(),
    await createBootcampersTable(),
    await seedBootcampersTable(),
  ];
}

export async function seedBootcampersTable() {
  return await pool.query(
    `INSERT INTO bootcampers (
      name
    ) (
      SELECT name
      FROM json_populate_recordset(NULL::bootcampers, $1::JSON)
    );`,
    [JSON.stringify(seedData)]
  );
}