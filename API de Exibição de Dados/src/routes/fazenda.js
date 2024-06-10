var express = require("express");
var router = express.Router();

var cadastrarController = require("../controllers/cadastrarController");

router.post("/cadastrarFazenda", function (req, res) {
    cadastrarController.cadastrarFazenda(req, res);
});

module.exports = router;