import { resetAllTables } from "../helpers.js";

import { pool } from "../index.js";

try {
  await resetAllTables();
  console.log("Dropped, re-created and re-seeded all tables");
} catch (err) {
  console.error(err);
} finally {
  await pool.end();
}

