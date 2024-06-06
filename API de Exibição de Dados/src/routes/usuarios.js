var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrarMatriz", function (req, res) {
    usuarioController.cadastrarMatriz(req, res);
})

router.get("/verMatriz", function (req, res) {
    usuarioController.verMatriz(req, res);
})

router.post("/cadastrarFazenda", function (req, res) {
    usuarioController.cadastrarFazenda(req, res);
})

router.get("/verFazenda", function (req, res) {
    usuarioController.verFazenda(req, res);
})

router.post("/cadastrarEndereco", function (req, res) {
    usuarioController.cadastrarEndereco(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

module.exports = router;