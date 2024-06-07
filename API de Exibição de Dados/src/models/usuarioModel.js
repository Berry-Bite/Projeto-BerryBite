var database = require("../database/config")

// USUARIO


// function cadastrarUsuario(nome,cnpj,telefoneFixo,senha) {
//     console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():",nome,cnpj,telefoneFixo,senha);
    
//     var instrucaoSql = `
//         INSERT INTO Matriz (razaoSocial, cnpj, telefoneFixo, senha) VALUES ('${nome}', '${cnpj}', '${telefoneFixo}', '${senha}')
//     `;
//         console.log("Executando a instrução SQL: \n" + instrucaoSql);
//     return database.executar(instrucaoSql);

    
// }

// function autenticarUsuario(cnpj, senha) {
//     console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", cnpj, senha)
//     var instrucaoSql = `
//         SELECT * FROM Matriz WHERE cnpj = '${cnpj}' AND senha = '${senha}';
//     `;
//     console.log("Executando a instrução SQL: \n" + instrucaoSql);
//     return database.executar(instrucaoSql);
    
// }


// MATRIZ
function cadastrarMatriz(razaoSocial, cnpj, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():",razaoSocial, cnpj, senha);
    
    var instrucaoSql = `
        INSERT INTO Matriz (razaoSocial, cnpj, senha) VALUES ('${razaoSocial}', '${cnpj}', '${senha}')
    `;
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}



// FAZENDA
function cadastrarFazenda(idMatriz, nomeFazenda) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarFazenda():",idMatriz, nomeFazenda);
    
    var instrucaoSql = `
        INSERT INTO Fazenda (nome, fkMatriz) VALUES ('${nomeFazenda}', '${idMatriz}')
    `;
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
    
}



// ENDERECO
function cadastrarEndereco(idFazenda, cep, numero, complemento) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarEndereco():",cep, numero, complemento, idFazenda);
    
    var instrucaoSql = `
        INSERT INTO Endereco (cep, numero, complemento, fkFazenda) VALUES ('${cep}', '${numero}', '${complemento}', '${idFazenda}');
    `;
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
    
}

function autenticarEmpresa(cnpj, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", cnpj, senha)
    var instrucaoSql = `
        SELECT * FROM Matriz WHERE cnpj = '${cnpj}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    // cadastrarUsuario,
    // autenticarUsuario,
    cadastrarMatriz,
    cadastrarFazenda,
    cadastrarEndereco,
    autenticarEmpresa
};