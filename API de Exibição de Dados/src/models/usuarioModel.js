var database = require("../database/config")

function cadastrarUsuario(nome, cpf, email, senha, idMatriz) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarUsuario():",nome, cpf, email, senha, idMatriz);
    
    var instrucaoSql = `
        INSERT INTO Usuario (nome, cpf, email, senha) VALUES ('${nome}', '${cpf}', '${email}', '${senha}')
    `;
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function autenticarUsuario(cpf, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function autenticarUsuario(): ", cpf, senha)
    var instrucaoSql = `
        SELECT * FROM Usuario WHERE cpf = '${cpf}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
    
}

function aparecerFuncionario(idMatriz) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function autenticarUsuario(): ", idMatriz)
    var instrucaoSql = `
        SELECT * FROM Usuario WHERE fkMatriz = '${idMatriz}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
    
}

module.exports = {
    cadastrarUsuario,
    autenticarUsuario,
    aparecerFuncionario
};