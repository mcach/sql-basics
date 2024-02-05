const router = require("express").Router();
const { createTable, describeTable } = require("../handlers/sql");

router.post("/api/tables", createTable);

router.get("/api/tables", describeTable);

module.exports = router;
