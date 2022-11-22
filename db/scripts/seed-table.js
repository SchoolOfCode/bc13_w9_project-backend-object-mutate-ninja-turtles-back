import { seedUsersTable } from "../helpers.js";
import { pool } from "../index.js";

try {
  await seedUsersTable();
  console.log("Seeded 'users' table");
} catch (err) {
  console.error(err);
} finally {
  await pool.end();
}