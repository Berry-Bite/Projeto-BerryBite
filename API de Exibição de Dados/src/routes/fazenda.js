var express = require("express");
var router = express.Router();

var fazendaController = require("../controllers/fazendaController");

router.post("/cadastrarFazenda", function (req, res) {
    fazendaController.cadastrarFazenda(req, res);
});

router.get("/verFazendas/:idMatriz", function (req, res) {
    fazendaController.verFazendas(req, res);
});

module.exports = router;