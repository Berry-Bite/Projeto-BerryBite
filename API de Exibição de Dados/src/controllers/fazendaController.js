var fazendaModel = require("../models/fazendaModel");

function cadastrarFazenda(req, res) {
    var idMatriz = req.body.matrizServer;
    var nomeFazenda = req.body.nomeFazendaServer;

    if (nomeFazenda == undefined) {
        res.status(400).send("Seu nomeFazenda está undefined!");
    } else if (idMatriz == undefined) {
        res.status(400).send("Seu cep está undefined!");
    } else {

        fazendaModel.cadastrarFazenda(idMatriz, nomeFazenda)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function verFazendas(req, res) {
    var idMatriz = req.params.idMatriz;

    if (idMatriz == undefined) {
        res.status(400).send("Seu idMatriz está undefined!");
    } else {

        fazendaModel.verFazendas(idMatriz)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro: verFazendas ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}


module.exports = {
    cadastrarFazenda,
    verFazendas
};