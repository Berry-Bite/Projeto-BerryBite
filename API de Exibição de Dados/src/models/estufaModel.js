var database = require("../database/config")

function estufaProblematica(umidadeMinima, umidadeMaxima, temperaturaMinima, temperaturaMaxima) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", cnpj, senha)
    var instrucaoSql = `
        select fkEstufa, umidade, temperatura from RegistroSensor 
            join sensor on RegistroSensor.fkSensor = Sensor.idSensor 
            where umidade < ${umidadeMinima} or umidade > ${umidadeMaxima} or temperatura < ${temperaturaMinima} or temperatura > ${temperaturaMaxima};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function ultimosDadosEstufa(idEstufa, limite) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", cnpj, senha)
    var instrucaoSql = `
        select umidade, temperatura from RegistroSensor join sensor on RegistroSensor.fkSensor = Sensor.idSensor where fkEstufa = ${idEstufa} limit ${limite};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    estufaProblematica,
    ultimosDadosEstufa
};