var usuarioModel = require("../models/usuarioModel");

function cadastrarFazenda(req, res) {
    var idMatriz = req.body.matrizServer;
    var nomeFazenda = req.body.nomeFazendaServer;

    if (nomeFazenda == undefined) {
        res.status(400).send("Seu nomeFazenda está undefined!");
    } else if (idMatriz == undefined) {
        res.status(400).send("Seu cep está undefined!");
    } else {

        usuarioModel.cadastrarFazenda(idMatriz, nomeFazenda)
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


module.exports = {
    cadastrarFazenda
};