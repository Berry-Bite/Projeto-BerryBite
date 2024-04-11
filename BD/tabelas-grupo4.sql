
create database BerryBite;
use BerryBite;

create table Matriz(
idMatriz int primary key auto_increment,
razaoSocial varchar(50),
cnpj char(18), constraint checkCnpj check (cnpj like '__.___.___/____-__'), 
email varchar(50), constraint checkEmail check (email like '%@%.%'),
cep char(9), constraint checkCep check (cep like '_____-___'),
numero varchar(5),
complemento varchar(45),
telefone char(14), constraint checkTelefone check (telefone like '(__)_____-____'),
senha varchar(15));

create table Fazenda(
idFazenda int primary key auto_increment,
nome varchar(45),
cep char(9),
numero varchar(45),
complemento varchar(45),
quantidadeEstufa int,
fkCadastro int, constraint fkFazendaMatriz foreign key (fkMatriz) references Matriz(idMatriz));

create table Usuario(
idUsuario int auto_increment,
fkFazendaUsuario int, 
constraint pkComposta primary key (idUsuario, fkFazendaUsuario),
nome varchar(45),
email varchar(45),
senha varchar(15),
telCelular char(12),
 constraint fkFazendaUsuario foreign key (fkFazendaUsuario) references Fazenda(idFazenda));

create table Estufa(
idEstufa int primary key auto_increment,
nome varchar(45),
tamanhoMetroQuadrado float,
quantidadeMorangueiros int,
fkFazendaEstufa int, constraint fkFazendaEstufa foreign key (fkFazendaEstufa) references Fazenda(idFazenda));

create table Sensor(
idSensor int primary key auto_increment,
tipo varchar(45),
temperaturaIdealMaxima float,
temperaturaIdealMinima float,
umidadeIdealMaxima float,
umidadeIdealMinima float,
fkEstufa int); 

create table RegistroSensor(
idSensor int primary key auto_increment,
umidade float,
temperatura float,
dataRegistro datetime default current_timestamp,
fkSensor int, constraint fkSensorRegistroSensor foreign key (fkSensor) references Sensor(idSensor));

insert into Matriz values
(default, 'EderMorangos', '52.555.878/0001-28','edermorangos@gmail.com','07135-018','326','', '(11)94575-1050', 'LUKE@2021!'),
(default, 'Muriloberrys', '26.166.266/0001-45', 'murilosberry@gmail.com', '07124-460', '197','' , '(11)99143-9544', 'Murilo!2020'),
(default, 'LucasfelibeMorango', '90.900.899/0001-10','LucasFelipe@hotmail.com','02450-123','675','','(21)90168-0981','Luqueta2000');

insert into Fazenda (idFazenda,nome, cep, numero, complemento,quantidadeEstufa, fkMatriz) values
(default,'Fazenda Moragos 1','07135-018','326','', 1, 1),
(default,'Morangos da villa', '07124-460', '197','' , 1, 2),
(default,'Reino do Morangos','02450-123','675','', 1, 3);

insert into Usuario(fkFazendaUsuario,nome,email,senha,telCelular) values
(1,'Eder Souza','edersouza@gmail.com','123456Eder','1196352-8965'),
(2,'Murilo Henrique','murilohenrique@gmail.com','562398Mh','1198764-5632'),
(3,'Lucas Felipe','lucasFelipe@gmail.com','563288lucas','1198756-3245');

insert into Estufa(tamanhoMetroQuadrado,nome, quantidadeMorangueiros, fkFazendaEstufa) values
(50,'Verde', 10, 1),
(35,'Amarelo',20, 2),
(42,'Azul', 17, 3);

insert into Sensor values
(default,'DHT11', 26, 13, 98, 75,1),
(default,'DHT11', 26, 13, 98, 75,2),
(default,'DHT11', 26, 13, 98, 75,3);

insert into RegistroSensor(umidade, temperatura, dataRegistro, fkSensor) values
(45.00, 22.00, default, 1),
(37.00, 27.7, default, 2),
(40.00, 25.8, default, 3);

SELECT concat('A empresa: ', razaoSocial, ' do CNPJ: ', cnpj) AS 'Empresa',
concat('Localizada em: ', cep, ' | ', numero, ' | ', complemento) AS 'Localização' FROM Matriz; 

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


