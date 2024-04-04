drop database BerryBite;
create database BerryBite;
use BerryBite;

create table Cadastro(
idCadastro int primary key auto_increment,
razaoSocial varchar(50),
cnpj char(18), constraint checkCnpj check (cnpj like '__.___.___/____-__'), 
email varchar(50), constraint checkEmail check (email like '%@%.%'),
cep char(9), constraint checkCep check (cep like '_____-___'),
numero varchar(5),
logradouro varchar(45),
bairro varchar(45),
cidade varchar(45),
uf char(2),
telefone char(14), constraint checkTelefone check (telefone like '(__)_____-____'),
senha varchar(15));

create table Fazenda(
idFazenda int primary key auto_increment,
quantidadeEstufa int,
fkCadastro int, constraint fkFazendaCadastro foreign key (fkCadastro) references Cadastro(idCadastro));

create table Estufa(
idEstufa int primary key auto_increment,
nome varchar(45),
tamanhoMetroQuadrado float,
quantidadeMorangueiros int,
fkFazenda int, constraint fkFazendaEstufa foreign key (fkFazenda) references Fazenda(idFazenda));

create table RegistroSensor(
idSensor int primary key auto_increment,
umidade float,
temperatura float,
dataRegistro datetime default current_timestamp,
fkEstufa int, constraint fkEstufaRegistroSensor foreign key (fkEstufa) references Estufa(idEstufa));

insert into Cadastro values
(default, 'EderMorangos', '52.555.878/0001-28','edermorangos@gmail.com','07135-018','326','rua colibri', 'Jd adriana', 'Guarulhos', 'SP', '(11)94575-1050', 'LUKE@2021!'),
(default, 'Muriloberrys', '26.166.266/0001-45', 'murilosberry@gmail.com', '07124-460', '197', 'rua da juventude', 'Gopouva', 'Guarulhos','SP', '(11)99143-9544', 'Murilo!2020'),
(default, 'LucasfelibeMorango', '90.900.899/0001-10','LucasFelipe@hotmail.com','02450-123','675','rua andorinha','Vila Augusta','Guarulhos','RJ','(21)90168-0981','Luqueta2000');

insert into Fazenda (idFazenda, quantidadeEstufa, fkCadastro) values
(default, 1, 1),
(default, 1, 2),
(default, 1, 3);

insert into Estufa(tamanhoMetroQuadrado,nome, quantidadeMorangueiros, fkFazenda) values
(50,'Verde', 10, 1),
(35,'Amarelo',20, 2),
(42,'Azul', 17, 3);

insert into RegistroSensor(umidade, temperatura, dataRegistro, fkEstufa) values
(45.00, 22.00, default, 1),
(37.00, 27.7, default, 2),
(40.00, 25.8, default, 3);

SELECT concat('A empresa: ', razaoSocial, ' do CNPJ: ', cnpj) AS 'Empresa',
concat('Localizada em: ', uf, ' | ', cidade, ' | ', bairro, ' | ', logradouro, ' | ', numero) AS 'Localização' FROM Cadastro; 

SELECT concat('A estufa: ', Estufa.idEstufa) AS 'Estufa',
concat('Com o nome: ',Estufa.nome) as 'Nome da Estufa',
concat('Pertence a fazenda: ', Fazenda.idFazenda) AS 'Fazenda',
concat('Da empresa: ', Cadastro.razaoSocial) AS 'Empresa' 
FROM Estufa JOIN Fazenda ON Estufa.fkFazenda = Fazenda.idFazenda
JOIN Cadastro ON Cadastro.idCadastro = Fazenda.fkCadastro;

SELECT concat('A umidade ', RegistroSensor.umidade, '%') AS 'Umidade da Estufa',
concat('A temperatura ', RegistroSensor.temperatura, ' ºC') AS 'Temperatuda da Estufa',
date_format(RegistroSensor.dataRegistro, '%d/%m/%Y - %h:%m:%s %p') AS 'Data da alteração' 
FROM RegistroSensor JOIN Estufa ON Estufa.idEstufa = RegistroSensor.fkEstufa;