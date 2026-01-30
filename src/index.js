const express = require("express");
const { Pool } = require("pg");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});


app.get("/", (req, res) => {
  res.json({
    message: "API Perpus berjalan",
    endpoints: {
      buku: "/api/buku"
    }
  });
});

app.get("/api/buku", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM buku ORDER BY id ASC");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/api/buku/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      "SELECT * FROM buku WHERE id = $1",
      [id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/api/buku", async (req, res) => {
  console.log(req.body);

  const { judul, pembuat, diterbitkan } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO buku (judul, pembuat, diterbitkan) VALUES ($1,$2,$3) RETURNING *",
      [judul, pembuat, diterbitkan]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put("/api/buku/:id", async (req, res) => {
  const { id } = req.params;
  const { judul, pembuat, diterbitkan } = req.body;

  try {
    const result = await pool.query(
      "UPDATE buku SET judul=$1, pembuat=$2, diterbitkan=$3 WHERE id=$4 RETURNING *",
      [judul, pembuat, diterbitkan, id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete("/api/buku/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query("DELETE FROM buku WHERE id=$1", [id]);
    res.json({ message: "Buku berhasil dihapus" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

console.log("Database connected:", process.env.DATABASE_URL);

module.exports = app;
