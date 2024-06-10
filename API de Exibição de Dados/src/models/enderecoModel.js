var database = require("../database/config")

function cadastrarEndereco(idFazenda, cep, numero, complemento) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarEndereco():",cep, numero, complemento, idFazenda);
    
    var instrucaoSql = `
        INSERT INTO Endereco (cep, numero, complemento, fkFazenda) VALUES ('${cep}', '${numero}', '${complemento}', '${idFazenda}');
    `;
    
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
    
}


module.exports = {
    cadastrarEndereco
};