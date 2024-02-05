const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "tutorial",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const createTable = async (request, response) => {
  try {
    pool.query(
      `CREATE TABLE students (
      student_id INT, 
      name VARCHAR(20), 
      major VARCHAR(20),
      PRIMARY KEY(student_id)
    )`
    );

    response.status(200).json({ status: 200 });
  } catch (error) {
    console.error(error);
    response.status(500).json({ status: 500, message: error.message });
  }
};

const describeTable = async (request, response) => {
  try {
    const [results] = await pool.query(`DESCRIBE students`);
    response.status(200).json({ status: 200, data: results });
  } catch (error) {
    console.error(error);
    response.status(500).json({ status: 500, message: error.message });
  }
};

module.exports = { createTable, describeTable };
