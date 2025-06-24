import pool from "../config/db.js";

export async function creataGalleryTable() {
  await pool.query(`
        CREATE TABLE IF NOT EXISTS gallery (
          id SERIAL PRIMARY KEY,
          caption VARCHAR(100),
          avatar_url TEXT,
          created_at TIMESTAMP DEFAULT NOW()
        )
        `);

  console.log("Gallery table created successfully.");
}
export async function dropGalleryTable() {
  await pool.query(`
        DROP TABLE IF EXISTS gallery
        `);

  console.log("Gallery table dropped successfully.");
}
