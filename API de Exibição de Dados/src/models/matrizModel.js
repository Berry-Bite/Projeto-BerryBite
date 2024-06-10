var database = require("../database/config")

function cadastrarMatriz(razaoSocial, cnpj, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():",razaoSocial, cnpj, senha);
    
    var instrucaoSql = `
        INSERT INTO Matriz (razaoSocial, cnpj, senha) VALUES ('${razaoSocial}', '${cnpj}', '${senha}')
    `;
    
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}

function autenticarMatriz(cnpj, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", cnpj, senha)
    var instrucaoSql = `
        SELECT * FROM Matriz WHERE cnpj = '${cnpj}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    cadastrarMatriz,
    autenticarMatriz
};