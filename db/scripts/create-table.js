import { createUsersTable } from "../helpers.js";
import { pool } from "../index.js";

try {
  await createUsersTable();
  console.log("Created 'users' table");
} catch (err) {
  console.error(err);
} finally {
  await pool.end();
}