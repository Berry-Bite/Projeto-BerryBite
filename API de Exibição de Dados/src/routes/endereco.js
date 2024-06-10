var express = require("express");
var router = express.Router();

var enderecoController = require("../controllers/enderecoController");

router.post("/cadastrarEndereco", function (req, res) {
    enderecoController.cadastrarEndereco(req, res);
})

module.exports = router;