import { resetBootcampersTable, resetTopicsTable, resetReviewsTable } from "../helpers.js";
import { resetAllTables } from "../helpers.js";

import { pool } from "../index.js";

// try {
//   await resetReviewsTable();
//   console.log("Dropped, re-created and re-seeded 'reviews' table");
//   await resetTopicsTable();
//   console.log("Dropped, re-created and re-seeded 'topics' table");
//   await resetBootcampersTable();
//   console.log("Dropped, re-created and re-seeded 'bootcampers' table");
// } catch (err) {
//   console.error(err);
// } finally {
//   await pool.end();
// }

try {
  await resetAllTables();
  console.log("Dropped, re-created and re-seeded all tables");
} catch (err) {
  console.error(err);
} finally {
  await pool.end();
}

