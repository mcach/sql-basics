const router = require("express").Router();
const { createTable, deleteTable, describeTable } = require("../handlers/sql");

router.post("/api/tables", createTable);

router.get("/api/tables", describeTable);

router.delete("/api/tables", deleteTable);

module.exports = router;
