var express = require("express");
var router = express.Router();

var estufaController = require("../controllers/estufaController");

router.get("/estufaProblematica/:idMatriz", function (req, res) {
    estufaController.estufaProblematica(req, res);
})

router.get("/ultimosDadosEstufa/:idEstufa/:idFazenda/:idMatriz", function (req, res) {
    estufaController.ultimosDadosEstufa(req, res);
})

router.get("/verEstufas/:indice/:idMatriz", function (req, res) {
    estufaController.verEstufas(req, res);
});

router.get("/compararEstufa/:idEstufa/:idFazenda/:idMatriz", function (req, res) {
    estufaController.compararEstufa(req, res);
});

module.exports = router;