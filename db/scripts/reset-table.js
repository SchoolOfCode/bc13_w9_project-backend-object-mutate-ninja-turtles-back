import { resetUsersTable } from "../helpers.js";
import { pool } from "../index.js";

try {
  await resetUsersTable();
  console.log("Dropped, re-created and re-seeded 'users' table");
} catch (err) {
  console.error(err);
} finally {
  await pool.end();
}