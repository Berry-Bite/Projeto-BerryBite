var express = require("express");
var router = express.Router();

var matrizController = require("../controllers/matrizController");

router.post("/cadastrarMatriz", function (req, res) {
    matrizController.cadastrarMatriz(req, res);
})

router.post("/autenticarMatriz", function (req, res) {
    matrizController.autenticarMatriz(req, res);
})

module.exports = router;