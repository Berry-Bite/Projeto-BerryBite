CREATE DATABASE berrybite;
USE berrybite;

CREATE TABLE Matriz(
    idMatriz INT PRIMARY KEY AUTO_INCREMENT,
    razaoSocial VARCHAR(50),
    cnpj CHAR(18) UNIQUE,
    CONSTRAINT checkCnpj CHECK (cnpj LIKE '__.___.___/____-__'),
    senha VARCHAR(15)
);

CREATE TABLE Fazenda(
    idFazenda INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    fkMatriz INT,
    CONSTRAINT fkFazendaMatriz FOREIGN KEY (fkMatriz) REFERENCES Matriz(idMatriz)
);

CREATE TABLE Usuario(
    idUsuario INT AUTO_INCREMENT,
    nome VARCHAR(45),
    email VARCHAR(45),
    cpf CHAR(11) UNIQUE,
    telCelular CHAR(12),
    senha VARCHAR(15),
    fkMatriz INT,
    PRIMARY KEY (idUsuario, fkMatriz),
    FOREIGN KEY (fkMatriz) REFERENCES Matriz(idMatriz)
);

CREATE TABLE Endereco(
    idEndereco INT PRIMARY KEY AUTO_INCREMENT,
    cep CHAR(9),
    numero VARCHAR(10),
    complemento VARCHAR(45),
    fkFazenda INT
);

CREATE TABLE Estufa(
    idEstufa INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    tamanhoMetroQuadrado FLOAT,
    quantidadeMorangueiros INT,
    fkFazenda INT,
    CONSTRAINT fkFazendaEstufa FOREIGN KEY (fkFazenda) REFERENCES Fazenda(idFazenda)
);

CREATE TABLE Sensor(
    idSensor INT PRIMARY KEY AUTO_INCREMENT,
    tipo VARCHAR(45),
    fkEstufa INT,
    fkMetrica INT
);

CREATE TABLE Metrica(
    idMetrica INT PRIMARY KEY AUTO_INCREMENT,
    temperaturaMinima FLOAT,
    temperaturaMaxima FLOAT,
    UmidadeMinima FLOAT,
    UmidadeMaxima FLOAT
);

CREATE TABLE RegistroSensor(
    idRegistroSensor INT PRIMARY KEY AUTO_INCREMENT,
    umidade FLOAT,
    temperatura FLOAT,
    dataRegistro DATETIME DEFAULT CURRENT_TIMESTAMP,
    fkSensor INT,
    CONSTRAINT fkSensorRegistroSensor FOREIGN KEY (fkSensor) REFERENCES Sensor(idSensor)
);

CREATE TABLE ContatoSimulador(
    idContatoSimulador INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    email VARCHAR(45),
    mensagem VARCHAR(500)
);

CREATE TABLE ContatoDashboard(
    idDashboard INT PRIMARY KEY AUTO_INCREMENT,
    mensagem VARCHAR(500),
    fkUsuario INT,
    CONSTRAINT fkDashboardUsuario FOREIGN KEY (fkUsuario) REFERENCES Usuario(idUsuario),
    fkFazenda INT,
    CONSTRAINT fkDashboardFazenda FOREIGN KEY (fkFazenda) REFERENCES Fazenda(idFazenda)
);

insert into Matriz values
(default, 'Eder Morangos', '52.555.878/0001-28','(11)9455-1050',1234),
(default, 'Murilo Berrys', '26.166.266/0001-45','(11)9143-9544',1234),
(default, 'Lucas Morango Ango', '90.900.899/0001-10','(21)0168-0981',1234);

insert into Fazenda values
(default,'Fazenda Morangos', 1, 1),
(default,'Morangos da villa', 1, 2),
(default,'Reino do Morangos', 1, 3);

insert into Usuario(fkFazendaUsuario,nome,email,cpf,telCelular,senha, fkMatriz) values
(1,'Eder Souza','edersouza@gmail.com','50934958831','116598-9865','123456Eder',1),
(2,'Murilo Henrique','murilohenrique@gmail.com','26356289725','1198764-5632','562398Mh',2),
(3,'Lucas Felipe','lucasFelipe@gmail.com','59876453445','1198756-3245','563288lucas',3);

insert into Estufa(tamanhoMetroQuadrado,nome, quantidadeMorangueiros, fkFazendaEstufa) values
(50,'Verde', 10, 1),
(35,'Amarelo',20, 2),
(42,'Azul', 17, 3);

insert into Sensor values
(default,'DHT11',1,1),
(default,'DHT11',2,2),
(default,'DHT11',3,3);

insert into Metrica values
(default, 26, 13, 98, 75),
(default,26, 13, 98, 75),
(default, 26, 13, 98, 75);

insert into RegistroSensor(fkSensor, umidade, temperatura, dataRegistro) values
(1, 45.00, 22.00, default),
(2, 37.00, 27.7, default),
(3, 40.00, 25.8, default);

insert into ContatoSimulador values
(1, 'Fernanda Caramico','fernada.caramico@gmail.com','Olá, me interessei pelo o que vocês podem oferecer, poderiam me retornar?'),
(2, 'João Pedro de Paula','JP@hotmail.com','Bom Dia!, gostei muito do que vocês estão oferecendo!'),
(3, 'Marise Santana','marise.santana@gmail.com','Me interessei pelo projeto de vocês, favor retornar para podermos dar continuidade na negociação');

SELECT concat('A empresa: ', razaoSocial, ' do CNPJ: ', cnpj) AS 'Empresa' FROM Matriz; 

SELECT concat('A estufa: ', Estufa.idEstufa) AS 'Estufa',
concat('Com o nome: ',Estufa.nome) as 'Nome da Estufa',
concat('Pertence a fazenda: ', Fazenda.idFazenda) AS 'Fazenda',
concat('Da empresa: ', Matriz.razaoSocial) AS 'Empresa' 
FROM Estufa JOIN Fazenda ON Estufa.fkFazendaEstufa = Fazenda.idFazenda
JOIN Matriz ON Matriz.idMatriz = Fazenda.fkMatriz;

SELECT concat('A umidade ', RegistroSensor.umidade, '%') AS 'Umidade da Estufa',
concat('A temperatura ', RegistroSensor.temperatura, ' ºC') AS 'Temperatuda da Estufa',
date_format(RegistroSensor.dataRegistro, '%d/%m/%Y - %h:%m:%s %p') AS 'Data da alteração' 
FROM RegistroSensor JOIN Estufa ON Estufa.idEstufa = RegistroSensor.fkSensor;


select idMatriz from matriz order by idMatriz desc limit 1;

select * from Matriz;
describe Usuario;
select * from Fazenda;
select * from Endereco;

 SELECT 
                MONTH(dataRegistro) AS mes,
                AVG(umidade) AS media_umidade,
                AVG(temperatura) AS media_temperatura
            FROM RegistroSensor 
            JOIN Sensor ON fkSensor = idSensor
            JOIN Estufa ON fkEstufa = idEstufa
            WHERE idEstufa = 1
            GROUP BY MONTH(dataRegistro)
            ORDER BY MONTH(dataRegistro);