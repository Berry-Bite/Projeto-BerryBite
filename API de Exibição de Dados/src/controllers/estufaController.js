var estufaModel = require("../models/estufaModel");


function estufaProblematica(req, res) {
    var umidadeMinima = 40;
    var umidadeMaxima = 80;
    var temperaturaMinima = 13;
    var temperaturaMaxima = 26;

    usuarioModel.estufaProblematica(umidadeMinima, umidadeMaxima, temperaturaMinima, temperaturaMaxima)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro: estufaProblematica",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );

}

function ultimosDadosEstufa(req, res) {
    var idEstufa = req.params.idEstufa;
    var limite = 7;

    usuarioModel.ultimosDadosEstufa(idEstufa, limite)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro: estufaProblematica",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );

}


module.exports = {
    estufaProblematica,
    ultimosDadosEstufa
};