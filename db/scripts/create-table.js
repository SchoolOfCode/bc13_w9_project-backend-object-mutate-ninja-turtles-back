import { createBootcampersTable } from "../helpers.js";
import { pool } from "../index.js";

try {
  await createBootcampersTable();
  console.log("Created 'bootcampers' table");
} catch (err) {
  console.error(err);
} finally {
  await pool.end();
}