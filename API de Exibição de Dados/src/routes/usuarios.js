var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.post("/cadastrarUsuario", function (req, res) {
    usuarioController.cadastrarUsuario(req, res);
})

router.post("/autenticarUsuario", function (req, res) {
    usuarioController.autenticarUsuario(req, res);
})

router.get("/aparecerFuncionario", function (req, res) {
    usuarioController.aparecerFuncionario(req, res);
})

// router.put("/editarNome", function (req, res) {
//     usuarioController.editarNome(req, res);
// })

module.exports = router;