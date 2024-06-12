var enderecoModel = require("../models/enderecoModel");

function cadastrarEndereco(req, res) {
    var cep = req.body.cepServer
    var numero = req.body.numeroServer
    var complemento = req.body.complementoServer
    var fkFazenda = req.body.fazendaServer
    
    if (cep == undefined) {
        res.status(400).send("Seu cep está undefined!");
    } else if (numero == undefined) {
        res.status(400).send("Seu numero está undefined!");
    } else if (complemento == undefined) {
        res.status(400).send("Seu complemento está undefined!");
    } else if (fkFazenda == undefined) {
        res.status(400).send("Seu fkFazenda está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        enderecoModel.cadastrarEndereco(cep, numero, complemento, fkFazenda)
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
    cadastrarEndereco
};