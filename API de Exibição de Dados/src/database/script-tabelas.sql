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
    CONSTRAINT checkcpf CHECK (cpf LIKE '___.___.___-__'),
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
    FOREIGN KEY (fkFazenda) REFERENCES Fazenda(idFazenda)
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
	FOREIGN KEY (fkSensor) REFERENCES Sensor(idSensor)
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
	FOREIGN KEY (fkUsuario) REFERENCES Usuario(idUsuario),
    fkFazenda INT,
	FOREIGN KEY (fkFazenda) REFERENCES Fazenda(idFazenda)
);
