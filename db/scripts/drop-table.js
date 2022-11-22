import { dropUsersTable } from "../helpers.js";
import { pool } from "../index.js";

try {
  await dropUsersTable();
  console.log("Dropped 'users' table");
} catch (err) {
  console.error(err);
} finally {
  await pool.end();
}