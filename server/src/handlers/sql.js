const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "tutorial",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const createTable = (request, response) => {
  pool.query("CREATE TABLE students (student_id INT PRIMARY KEY)");

  response.status(200).json({ status: 200, message: "success!" });
};

module.exports = { createTable };
