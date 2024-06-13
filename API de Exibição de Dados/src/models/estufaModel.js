var database = require("../database/config")

function estufaProblematica(idMatriz) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function estufaProblematica(): ", idMatriz)
    var instrucaoSql = `
        select umidade, temperatura, fkEstufa, fkFazenda, dataRegistro from RegistroSensor
         join Sensor on RegistroSensor.fkSensor = Sensor.idSensor
         where fkMatriz = ${idMatriz}
         order by dataRegistro desc limit 100;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function ultimosDadosEstufa(idEstufa,idFazenda, idMatriz, limite) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function ultimosDadosEstufa(): ", idEstufa, limite)
    var instrucaoSql = `
        select umidade, temperatura, date_format(dataRegistro, '%H:%m:%s') as momento from RegistroSensor
         join Sensor on RegistroSensor.fkSensor = Sensor.idSensor
         where fkEstufa = ${idEstufa} AND fkFazenda = ${idFazenda} AND fkMatriz = ${idMatriz}
         order by dataRegistro desc limit ${limite};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function verEstufas(idFazenda, idMatriz) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarFazenda():", idFazenda, idMatriz);

    var instrucaoSql = `
        SELECT Estufa.nome, idEstufa FROM Estufa JOIN Fazenda ON idFazenda = fkFazenda WHERE fkFazenda = ${idFazenda} AND fkMatriz = ${idMatriz} ;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function compararEstufa(idEstufa, idFazenda, idMatriz) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function compararEstufa():", idEstufa);

    var instrucaoSql = `
       SELECT 
            MONTH(dataRegistro) AS mes,
            ROUND(AVG(umidade), 2) AS media_umidade,
            ROUND(AVG(temperatura), 2) AS media_temperatura
        FROM RegistroSensor 
        JOIN Sensor ON fkSensor = Sensor.idSensor
        WHERE fkEstufa = ${idEstufa} AND fkFazenda = ${idFazenda} AND fkMatriz = ${idMatriz}
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