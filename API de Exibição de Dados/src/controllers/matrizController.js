var matrizModel = require("../models/matrizModel");


function cadastrarMatriz(req, res) {
    var razaoSocial = req.body.nomeServer;
    var cnpj = req.body.cnpjServer;
    var senha = req.body.senhaServer;

    if (razaoSocial == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (cnpj == undefined) {
        res.status(400).send("Seu cnpj está undefined!")
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");

    } else {

        matrizModel.cadastrarMatriz(razaoSocial, cnpj, senha)
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

function autenticarMatriz(req, res) {
    var cnpj = req.body.cnpjServer;
    var senha = req.body.senhaServer;

    if (cnpj == undefined) {
        res.status(400).send("Seu cnpj está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        matrizModel.autenticarMatriz(cnpj, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`);

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);
                        var usuario = resultadoAutenticar[0]
                        res.json({
                            id: usuario.idMatriz,
                            cnpj: usuario.raxaoSocial,
                            nome: usuario.cnpj,
                            senha: usuario.senha
                        });

                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("CNPJ e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}


module.exports = {
    autenticarMatriz,
    cadastrarMatriz
};