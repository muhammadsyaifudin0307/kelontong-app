import express from "express";
import cors from "cors";
import db from "mysql2";

const app = express();
const port = 3000;
app.use(cors());

const pool = db.createPool({
  host: "localhost",
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

app.get("/", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM users");
    res.json(rows);
  } catch (error) {
    res.status(500).json({
      message: "Databases error",
      error,
    });
  }
});

app.listen(port, () => {
  console.log("Server is running on  port", port);
});
