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
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function ultimosDadosEstufa(): ", idEstufa, limite)
    var instrucaoSql = `
        select umidade, temperatura from RegistroSensor join sensor on RegistroSensor.fkSensor = Sensor.idSensor where fkEstufa = ${idEstufa} limit ${limite};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function verEstufas(idFazenda) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarFazenda():", idFazenda);

    var instrucaoSql = `
        SELECT nome, idEstufa FROM Estufa WHERE fkFazendaEstufa = ${idFazenda};
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function compararEstufa(idEstufa) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function compararEstufa():", idEstufa);

    var instrucaoSql = `
       SELECT 
            MONTH(dataRegistro) AS mes,
             AVG(umidade) AS media_umidade,
            AVG(temperatura) AS media_temperatura
        FROM RegistroSensor 
        JOIN Sensor ON fkSensor = idSensor
        JOIN Estufa ON fkEstufa = idEstufa
        WHERE idEstufa = ${idEstufa}
        GROUP BY MONTH(dataRegistro)
        ORDER BY MONTH(dataRegistro);

    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    estufaProblematica,
    ultimosDadosEstufa,
    verEstufas,
    compararEstufa
};