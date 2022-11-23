import { resetBootcampersTable, resetTopicsTable } from "../helpers.js";
import { pool } from "../index.js";

try {
  await resetBootcampersTable();
  console.log("Dropped, re-created and re-seeded 'bootcampers' table");
  await resetTopicsTable();
  console.log("Dropped, re-created and re-seeded 'topics' table");
} catch (err) {
  console.error(err);
} finally {
  await pool.end();
}

