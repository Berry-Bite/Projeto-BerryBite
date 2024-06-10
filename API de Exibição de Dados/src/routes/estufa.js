var express = require("express");
var router = express.Router();

var estufaController = require("../controllers/estufaController");

router.post("/estufaProblematica", function (req, res) {
    estufaController.estufaProblematica(req, res);
})

router.post("/ultimosDadosEstufa/:idUsuario", function (req, res) {
    estufaController.ultimosDadosEstufa(req, res);
})

module.exports = router;