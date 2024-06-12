var database = require("../database/config")

function estufaProblematica(umidadeMinima, umidadeMaxima, temperaturaMinima, temperaturaMaxima, idMatriz) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", cnpj, senha)
    var instrucaoSql = `
        select fkEstufa, umidade, temperatura from RegistroSensor 
            join sensor on RegistroSensor.fkSensor = Sensor.idSensor 
            where (umidade < ${umidadeMinima} or umidade > ${umidadeMaxima} 
            or temperatura < ${temperaturaMinima} or temperatura > ${temperaturaMaxima}) 
            AND fkMatriz = ${idMatriz};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function ultimosDadosEstufa(idEstufa, limite,idFazenda, idMatriz) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function ultimosDadosEstufa(): ", idEstufa, limite)
    var instrucaoSql = `
        select umidade, temperatura from RegistroSensor
         join Sensor on RegistroSensor.fkSensor = Sensor.idSensor
         join Estufa on fkEstufa = idEstufa
         join Fazenda on fkFazenda = idFazenda
         where fkEstufa = ${idEstufa} AND fkFazenda = ${idFazenda} AND fkMatriz = ${idMatriz} limit ${limite};
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
        JOIN Estufa ON fkEstufa = idEstufa
        JOIN Fazenda ON fkFazenda = idFazenda
        WHERE idEstufa = ${idEstufa} AND fkFazenda = ${idFazenda} AND fkMatriz = ${idMatriz}
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