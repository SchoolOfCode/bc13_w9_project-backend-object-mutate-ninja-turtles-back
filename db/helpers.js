

import { pool } from "./index.js";
import { seedData, seedTopics } from "./seed-data.js";

export async function createBootcampersTable() {
  return await pool.query(
    `CREATE TABLE IF NOT EXISTS bootcampers (
      id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      name VARCHAR(50) NOT NULL
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

// Topics Table below

export async function createTopicsTable() {
  return await pool.query(
    `CREATE TABLE IF NOT EXISTS topics (
      id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      bootcamper_id INTEGER REFERENCES bootcampers(id),
      subject_title TEXT, 
      date_added DATE,
      resources TEXT,
      image_src TEXT
    );`
  );
}

export async function dropTopicsTable() {
  return await pool.query("DROP TABLE IF EXISTS topics;");
}

export async function resetTopicsTable() {
  return [
    await dropTopicsTable(),
    await createTopicsTable(),
    await seedTopicsTable(),
  ];
}

export async function seedTopicsTable() {
  return await pool.query(
    `INSERT INTO topics (
      subject_title
    ) (
      SELECT subject_title
      FROM json_populate_recordset(NULL::topics, $1::JSON)
    );`,
    [JSON.stringify(seedTopics)]
  );
}