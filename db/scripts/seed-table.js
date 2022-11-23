import { seedBootcampersTable, seedTopicsTable, seedReviewsTable } from "../helpers.js";
import { pool } from "../index.js";

try {
  await seedBootcampersTable();
  console.log("Seeded 'bootcampers' table");
  await seedTopicsTable();
  console.log("Seeded 'topics' table");
  await seedReviewsTable();
  console.log("Seeded 'reviews' table");
} catch (err) {
  console.error(err);
} finally {
  await pool.end();
}

