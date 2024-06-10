var express = require("express");
var router = express.Router();

var estufaController = require("../controllers/estufaController");

router.post("/estufaProblematica", function (req, res) {
    estufaController.estufaProblematica(req, res);
})

router.get("/ultimosDadosEstufa/:idEstufa", function (req, res) {
    estufaController.ultimosDadosEstufa(req, res);
})

router.get("/verEstufas/:idFazenda", function (req, res) {
    estufaController.verEstufas(req, res);
});

module.exports = router;