import { createBootcampersTable } from "../helpers.js";
import { createTopicsTable } from "../helpers.js";

import { pool } from "../index.js";

try {
  await createBootcampersTable();
  console.log("Created 'bootcampers' table");
  await createTopicsTable();
  console.log("Created 'Topics' table");
} catch (err) {
  console.error(err);
} finally {
  await pool.end();
}



