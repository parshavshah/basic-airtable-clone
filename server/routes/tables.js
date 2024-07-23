var express = require("express");
var router = express.Router();

const tableController = require("../controllers/table.controller");

/* GET table listing. */
router.get("/table/list", tableController.getTableList);
router.post("/table/create", tableController.createTable);
router.get("/table/show/:table", tableController.showTableInfo);

module.exports = router;
