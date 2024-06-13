CREATE DATABASE BerryBite;
USE BerryBite;

CREATE TABLE Matriz(
    idMatriz INT PRIMARY KEY AUTO_INCREMENT,
    razaoSocial VARCHAR(50),
    cnpj CHAR(18) UNIQUE,
    CONSTRAINT checkCnpj CHECK (cnpj LIKE '__.___.___/____-__'),
    senha VARCHAR(15)
);

CREATE TABLE Fazenda(
    idFazenda INT PRIMARY KEY,
    nome VARCHAR(45),
    fkMatriz INT,
    CONSTRAINT fkFazendaMatriz FOREIGN KEY (fkMatriz) REFERENCES Matriz(idMatriz)
);

CREATE TABLE Usuario(
    idUsuario INT AUTO_INCREMENT,
    nome VARCHAR(45),
    email VARCHAR(45),
    cpf CHAR(14) UNIQUE,
    CONSTRAINT checkCpf CHECK (cpf LIKE '___.___.___-__'),
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
    idEstufa INT PRIMARY KEY,
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
    fkFazenda INT,
    fkMatriz INT,
    fkMetrica INT,
    FOREIGN KEY (fkEstufa) REFERENCES Estufa(idEstufa),
    FOREIGN KEY (fkFazenda) REFERENCES Fazenda(idFazenda),
    FOREIGN KEY (fkMatriz) REFERENCES Matriz(idMatriz)
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




insert into Matriz values
(default, 'Eder Morangos', '52.555.878/0001-28',1234),
(default, 'Murilo Berrys', '26.166.266/0001-45',1234),
(default, 'Lucas Morango Ango', '90.900.899/0001-10',1234);

insert into Fazenda values
(1,'Fazenda Recanto Feliz', 1),
(2,'Fazenda Recanto Contente', 1);

insert into Usuario values
(default,'Eder Souza','edersouza@gmail.com','509.349.588-31','123456Eder',1),
(default,'Murilo Henrique','murilohenrique@gmail.com','263.562.897-25','562398Mh',2),
(default,'Lucas Felipe','lucasFelipe@gmail.com','598.764.534-45','563288lucas',3);

insert into Estufa values
(1, 'Verde', 50, 10, 1),
(2, 'Amarelo',35,20, 1),
(3, 'Azul',42, 17, 1);

insert into Metrica values
(default, 13, 26, 75, 98),
(default, 13, 26, 75, 98),
(default, 13, 26, 75, 98);

insert into Sensor values
(default,'DHT11', 1, 1, 1, 1),
(default,'DHT11', 1, 1, 1, 2),
(default,'DHT11', 1, 1, 1, 3);

insert into ContatoSimulador values
(1, 'Fernanda Caramico','fernada.caramico@gmail.com','Olá, me interessei pelo o que vocês podem oferecer, poderiam me retornar?'),
(2, 'João Pedro de Paula','JP@hotmail.com','Bom Dia!, gostei muito do que vocês estão oferecendo!'),
(3, 'Marise Santana','marise.santana@gmail.com','Me interessei pelo projeto de vocês, favor retornar para podermos dar continuidade na negociação');

insert into endereco values 
(default, '08725-800', 234, 'perto da praça', 1),
(default, '08234-340', 654, 'perto do lago', 1);

insert into RegistroSensor values
(default, 53, 28, '2023-07-14 22:20:30', 1),
(default, 60, 23, '2023-07-28 22:20:30', 1),
(default, 64, 20, '2023-08-14 22:20:30', 1),
(default, 62, 19, '2023-08-28 22:20:30', 1),
(default, 71, 14, '2023-09-14 22:20:30', 1),
(default, 63, 17, '2023-09-28 22:20:30', 1),
(default, 74, 12, '2023-10-14 22:20:30', 1),
(default, 79, 10, '2023-10-28 22:20:30', 1),
(default, 58, 17, '2023-11-14 22:20:30', 1),
(default, 66, 19, '2023-11-28 22:20:30', 1),
(default, 69, 20, '2023-12-14 22:20:30', 1),
(default, 62, 21, '2023-12-28 22:20:30', 1),
(default, 62, 23, '2024-01-14 22:20:30', 1),
(default, 69, 22, '2024-01-28 22:20:30', 1),
(default, 64, 17, '2024-02-14 22:20:30', 1),
(default, 67, 23, '2024-02-28 22:20:30', 1),
(default, 72, 25, '2024-03-14 22:20:30', 1),
(default, 51, 20, '2024-03-28 22:20:30', 1),
(default, 68, 19, '2024-04-14 22:20:30', 1),
(default, 74, 26, '2024-04-28 22:20:30', 1),
(default, 57, 17, '2024-05-14 22:20:30', 1),
(default, 81, 15, '2024-05-28 22:20:30', 1),
(default, 66, 23, '2024-06-02 22:20:30', 1),
(default, 63, 24, '2024-06-10 22:20:30', 1);