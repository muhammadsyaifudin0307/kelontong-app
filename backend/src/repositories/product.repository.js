import { pool } from "../config/connection.js";

// Products
export const getAllProducts = async () => {
  const [rows] = await pool.query("SELECT * FROM products");
  return rows;
};

export const getAllProductsById = async (id) => {
  const [rows] = await pool.query("SELECT * FROM products WHERE id = ?", [id]);
  return rows[0];
};

export const getProductCode = async (product_code) => {
  const [rows] = await pool.query(
    "SELECT * FROM products WHERE product_code = ? ",
    [product_code],
  );
  return rows[0];
};

export const createProduct = async (
  product_code,
  name,
  category_id,
  cost_price,
  selling_price,
  stock,
) => {
  const [rows] = await pool.query(
    "INSERT INTO products (product_code, name, category_id, cost_price,selling_price,stock) VALUES (?,?,?,?,?,?)",
    [product_code, name, category_id, cost_price, selling_price, stock],
  );

  const results = await getAllProductsById(rows.insertId);
  return results;
};

export const updateProduct = async (
  product_code,
  name,
  category_id,
  cost_price,
  selling_price,
  stock,
  id,
) => {
  const [rows] = await pool.query(
    "UPDATE products SET product_code = ?, name = ?, category_id = ?, cost_price = ? ,selling_price = ?,stock =? WHERE id = ? ",
    [product_code, name, category_id, cost_price, selling_price, stock, id],
  );

  const results = await getAllProductsById(id);
  return results;
};

export const deleteProducts = async (id) => {
  const [rows] = await pool.query("DELETE FROM products WHERE id= ?", [id]);

  return rows;
};
