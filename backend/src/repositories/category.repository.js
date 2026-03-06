// Categories
import { pool } from "../config/connection.js";

export const getCategories = async () => {
  const [rows] = await pool.query("SELECT * FROM categories");
  return rows;
};

export const getCategoryById = async (id) => {
  const [rows] = await pool.query("SELECT * FROM categories WHERE id = ?", [
    id,
  ]);
  return rows[0];
};

export const createCategory = async (name) => {
  const [rows] = await pool.query("INSERT INTO categories (name) VALUES (?)", [
    name,
  ]);

  const results = await getCategoryById(rows.insertId);
  return results;
};

export const updateCategory = async (id, name) => {
  const [rows] = await pool.query(
    "UPDATE categories SET name = ? WHERE id = ?",
    [name, id],
  );

  const results = await getCategoryById(id);
  return results;
};

export const deleteCategory = async (id) => {
  const [rows] = await pool.query("DELETE FROM categories WHERE id = ?", [id]);
  return rows;
};
