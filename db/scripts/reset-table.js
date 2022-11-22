import { resetBootcampersTable } from "../helpers.js";
import { pool } from "../index.js";

try {
  await resetBootcampersTable();
  console.log("Dropped, re-created and re-seeded 'bootcampers' table");
} catch (err) {
  console.error(err);
} finally {
  await pool.end();
}