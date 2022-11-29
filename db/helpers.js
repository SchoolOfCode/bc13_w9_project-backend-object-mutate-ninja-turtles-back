

import { pool } from "./index.js";
import { seedData, seedTopics, seedReviews } from "./seed-data.js";

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
      subject_title, bootcamper_id, date_added, resources, image_src
    ) (
      SELECT subject_title, bootcamper_id, date_added, resources, image_src
      FROM json_populate_recordset(NULL::topics, $1::JSON)
    );`,
    [JSON.stringify(seedTopics)]
  );
}

// Reviews Table below

export async function createReviewsTable() {
  return await pool.query(
    `CREATE TABLE IF NOT EXISTS reviews (
      id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
     topic_id INTEGER REFERENCES topics(id),
     score INTEGER,
     date_added DATE,
     bootcamper_id INTEGER REFERENCES bootcampers(id)
     );`
  );
}

export async function dropReviewsTable() {
  return await pool.query("DROP TABLE IF EXISTS reviews;");
}

export async function resetReviewsTable() {
  return [
    await dropReviewsTable(),
    await createReviewsTable(),
    await seedReviewsTable(),
  ];
}

export async function seedReviewsTable() {
  return await pool.query(
    `INSERT INTO reviews (
      topic_id, score, date_added, bootcamper_id
    ) (
      SELECT topic_id, score, date_added, bootcamper_id
      FROM json_populate_recordset(NULL::reviews, $1::JSON)
    );`,
    [JSON.stringify(seedReviews)]
  );
}

// Reset ALL tables 
export async function resetAllTables() {
  return [
    await dropReviewsTable(),
    await dropTopicsTable(),
    await dropBootcampersTable(),
    await createBootcampersTable(),
    await createTopicsTable(),
    await createReviewsTable(),
    await seedBootcampersTable(),
    await seedTopicsTable(),
    await seedReviewsTable(),
  ];
}