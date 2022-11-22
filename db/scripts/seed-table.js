import { seedBootcampersTable } from "../helpers.js";
import { pool } from "../index.js";

try {
  await seedBootcampersTable();
  console.log("Seeded 'bootcampers' table");
} catch (err) {
  console.error(err);
} finally {
  await pool.end();
}