const router = require("express").Router();
const { createTable } = require("../handlers/sql");

router.post("/api/tables", createTable);

module.exports = router;
