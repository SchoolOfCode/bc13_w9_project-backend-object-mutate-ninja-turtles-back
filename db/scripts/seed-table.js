import { seedBootcampersTable, seedTopicsTable } from "../helpers.js";
import { pool } from "../index.js";

try {
  await seedBootcampersTable();
  console.log("Seeded 'bootcampers' table");
  await seedTopicsTable();
  console.log("Seeded 'topics' table");
} catch (err) {
  console.error(err);
} finally {
  await pool.end();
}

