var express = require("express");
var router = express.Router();

const userController = require("../controllers/user.controller");

/* GET users listing. */
router.post("/user/register", userController.registerUser);
router.post("/user/login", userController.loginUser);

module.exports = router;
