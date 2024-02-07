const mysql = require("mysql2/promise");
const errorResponse = require("../helpers/errorResponse");

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

    return response.status(200).json({ status: 200 });
  } catch (error) {
    errorResponse(error, response);
  }
};

const deleteTable = async (request, response) => {
  try {
    await pool.query(`DROP TABLE students`);
    return response.status(204).json();
  } catch (error) {
    errorResponse(error, response);
  }
};

const describeTable = async (request, response) => {
  try {
    const [results] = await pool.query(`DESCRIBE students`);
    return response.status(200).json({ status: 200, data: results });
  } catch (error) {
    errorResponse(error, response);
  }
};

module.exports = { createTable, deleteTable, describeTable };
