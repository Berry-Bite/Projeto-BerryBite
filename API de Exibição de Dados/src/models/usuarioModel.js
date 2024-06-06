var database = require("../database/config")

// USUARIO
function autenticarUsuario(cnpj, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", cnpj, senha)
    var instrucaoSql = `
        SELECT * FROM Matriz WHERE cnpj = '${cnpj}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
    
}

function cadastrarUsuario(nome,cnpj,telefoneFixo,senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():",nome,cnpj,telefoneFixo,senha);
    
    var instrucaoSql = `
        INSERT INTO Matriz (razaoSocial, cnpj, telefoneFixo, senha) VALUES ('${nome}', '${cnpj}', '${telefoneFixo}', '${senha}')
    `;
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

    
}

// MATRIZ
function cadastrarMatriz(razaoSocial, cnpj, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():",razaoSocial, cnpj, senha);
    
    var instrucaoSql = `
        INSERT INTO Matriz (razaoSocial, cnpj, senha) VALUES ('${razaoSocial}', '${cnpj}', '${senha}')
    `;
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}

function verMatriz(cnpj, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():",nome, cnpj);
    
    var instrucaoSql = `
        SELECT idMatriz, razaoSocial, cnpj, senha FROM Matriz WHERE cnpj = '${cnpj}'
    `;
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
    
}

// FAZENDA
function cadastrarFazenda(idMatriz, nome) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarFazenda():",idMatriz, nome);
    
    var instrucaoSql = `
        INSERT INTO Fazenda (nome, fkMatriz) VALUES ('${nome}', '${idMatriz}')
    `;
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
    
}

function verFazenda(nome, idMatriz) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function verFazenda():",nome, idMatriz);
    
    var instrucaoSql = `
        SELECT idFazenda FROM Fazenda WHERE nome = '${nome} AND fkFazenda = '${idMatriz}''
    `;
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
    
}

// ENDERECO
function cadastrarEndereco(cep, numero, complemento, idFazenda) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarEndereco():",cep, numero, complemento, idFazenda);
    
    var instrucaoSql = `
        INSERT INTO Endereco (cep, numero, complemento, fkFazenda) VALUES ('${cep}', '${numero}', '${complemento}', '${idFazenda}');
    `;
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
    
}

module.exports = {
    autenticarUsuario,
    cadastrarUsuario,
    cadastrarMatriz,
    verMatriz,
    cadastrarFazenda,
    verFazenda,
    cadastrarEndereco
};