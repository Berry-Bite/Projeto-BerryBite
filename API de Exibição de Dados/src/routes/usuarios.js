var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.post("/cadastrarUsuario", function (req, res) {
    usuarioController.cadastrarUsuario(req, res);
})

router.post("/autenticarUsuario", function (req, res) {
    usuarioController.autenticarUsuario(req, res);
})

module.exports = router;