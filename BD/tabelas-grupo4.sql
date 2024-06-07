
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

select * from Fazenda;
select * from Endereco;
