var estufaModel = require("../models/estufaModel");


function estufaProblematica(req, res) {
    var umidadeMinima = 40;
    var umidadeMaxima = 80;
    var temperaturaMinima = 13;
    var temperaturaMaxima = 26;

    estufaModel.estufaProblematica(umidadeMinima, umidadeMaxima, temperaturaMinima, temperaturaMaxima)
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

    if (idEstufa == undefined) {
        res.status(400).send("Seu idEstufa está undefined!");
    } else {

        estufaModel.ultimosDadosEstufa(idEstufa, limite)
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

}


function verEstufas(req, res) {
    var idFazenda = req.params.idFazenda;

    if (idFazenda == undefined) {
        res.status(400).send("Seu idFazenda está undefined!");
    } else {

        estufaModel.verEstufas(idFazenda)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro: verEstufas ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}


function compararEstufa(req, res) {
    var idEstufa= req.params.idEstufa;

    if (idEstufa== undefined) {
        res.status(400).send("Seu idEstufa está undefined!");
    } else {

        estufaModel.verEstufas(idEstufa)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro: verEstufas ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}




module.exports = {
    estufaProblematica,
    ultimosDadosEstufa,
    verEstufas,
    compararEstufa
};