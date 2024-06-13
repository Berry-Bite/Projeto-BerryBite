var estufaModel = require("../models/estufaModel");


function estufaProblematica(req, res) {
    var idMatriz = req.params.idMatriz;

    estufaModel.estufaProblematica(idMatriz)
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
    var idFazenda = req.params.idFazenda;
    var idMatriz = req.params.idMatriz;
    var limite = 7;

    if (idEstufa == undefined) {
        res.status(400).send("Seu idEstufa está undefined!");
    } else {

        estufaModel.ultimosDadosEstufa(idEstufa, idFazenda, idMatriz, limite)
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
    var idFazenda = req.params.indice;
    var idMatriz = req.params.idMatriz;

    if (idFazenda == undefined) {
        res.status(400).send("Seu idFazenda está undefined!");
    } else if (idMatriz == undefined) {
        res.status(400).send("Seu idMatriz está undefined!");
    } else {

        estufaModel.verEstufas(idFazenda, idMatriz)
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
    var idFazenda= req.params.idFazenda;
    var idMatriz= req.params.idMatriz;

    if (idEstufa== undefined) {
        res.status(400).send("Seu idEstufa está undefined!");
    } else {

        estufaModel.compararEstufa(idEstufa, idFazenda, idMatriz)
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