create database BerryBite;
use BerryBite;

create table Matriz(
idMatriz int primary key auto_increment,
razaoSocial varchar(50),
cnpj char(18), constraint checkCnpj check (cnpj like '__.___.___/____-__'), 
telefoneFixo char(13),
senha varchar(15));

create table Fazenda(
idFazenda int primary key auto_increment,
nome varchar(45),
quantidadeEstufa int,
fkMatriz int, constraint fkFazendaMatriz foreign key (fkMatriz) references Matriz(idMatriz));

create table Usuario(
idUsuario int auto_increment,
fkFazendaUsuario int, 
constraint pkComposta primary key (idUsuario, fkFazendaUsuario),
nome varchar(45),
email varchar(45),
cpf char(11),
telCelular char(12),
senha varchar(15),
fkMatriz int,
 constraint fkFazendaUsuario foreign key (fkFazendaUsuario) references Fazenda(idFazenda));

create table Endereco(
idEndereco int primary key AUTO_INCREMENT,
cep char(9),
numero varchar(10),
complemento varchar(45),
fkFazenda int);

create table Estufa(
idEstufa int primary key auto_increment,
nome varchar(45),
tamanhoMetroQuadrado float,
quantidadeMorangueiros int,
fkFazendaEstufa int, constraint fkFazendaEstufa foreign key (fkFazendaEstufa) references Fazenda(idFazenda));

create table Sensor(
idSensor int primary key auto_increment,
tipo varchar(45),
fkEstufa int,
fkMetrica int); 

create table Metrica(
idMetrica int,
temperaturaMinima float,
temperaturaMaxima float,
UmidadeMinima float,
UmidadeMaxima float);

create table RegistroSensor(
idSensor int primary key auto_increment,
umidade float,
temperatura float,
dataRegistro datetime default current_timestamp,
fkSensor int, constraint fkSensorRegistroSensor foreign key (fkSensor) references Sensor(idSensor));

create table ContatoSimulador(
idContatoSimulador int primary key auto_increment,
nome varchar(45),
email varchar(45),
mensagem varchar(500));

create table ContatoDashboard (
idDashboard int primary key auto_increment,
mensagem varchar(500),
fkUsuario int,
constraint fkDashboardUsuario foreign key (fkUsuario) references Usuario(idUsuario),
fkFazenda int,
constraint fkDashboardFazenda foreign key (fkFazenda) references Fazenda(idFazenda));