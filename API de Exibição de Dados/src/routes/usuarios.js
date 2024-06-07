var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrarMatriz", function (req, res) {
    usuarioController.cadastrarMatriz(req, res);
})

router.post("/cadastrarFazenda", function (req, res) {
    usuarioController.cadastrarFazenda(req, res);
})

router.post("/cadastrarEndereco", function (req, res) {
    usuarioController.cadastrarEndereco(req, res);
})

router.post("/autenticarEmpresa", function (req, res) {
    usuarioController.autenticarEmpresa(req, res);
});

module.exports = router;