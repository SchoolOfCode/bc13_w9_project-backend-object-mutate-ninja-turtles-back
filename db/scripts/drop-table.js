import { dropBootcampersTable, dropTopicsTable } from "../helpers.js";
import { pool } from "../index.js";

try {
  await dropTopicsTable();
  console.log("Dropped 'topics' table");
  await dropBootcampersTable();
  console.log("Dropped 'bootcampers' table");
} catch (err) {
  console.error(err);
} finally {
  await pool.end();
}

