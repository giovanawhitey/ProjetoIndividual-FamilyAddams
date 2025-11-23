CREATE DATABASE FamiliaAddams;

USE FamiliaAddams;

CREATE TABLE Usuario (
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45),
email VARCHAR(45),
senha VARCHAR(45)
);


CREATE TABLE Quiz (
idQuiz INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45),
descricao VARCHAR(255),
img VARCHAR(255)
);


CREATE TABLE Caracteristica (
idCaracteristica INT PRIMARY KEY AUTO_INCREMENT,
nomeCaracteristica VARCHAR(45)
);

SELECT * FROM Resultado;
CREATE TABLE Resultado (
idResultado INT PRIMARY KEY AUTO_INCREMENT,
fkQuiz INT,
fkUsuario INT,
fkCaracteristica INT,
CONSTRAINT fkResultadoQuiz
	FOREIGN KEY (fkQuiz) 
     REFERENCES Quiz(idQuiz),
CONSTRAINT fkResultadoUsuario
	FOREIGN KEY (fkUsuario) 
     REFERENCES Usuario(idUsuario),
CONSTRAINT fkResultadoCaracteristica
	FOREIGN KEY (fkCaracteristica) 
     REFERENCES Caracteristica(idCaracteristica)
);

INSERT INTO Quiz (nome, img, descricao) VALUES
('Mortícia Addams', './assets/imgs/morticia.jpg', 'Matriarca elegante e sombria, carinhosa e protetora, mantém a família unida.'),
('Gomez Addams', './assets/imgs/gomez.webp', 'Patriarca excêntrico e apaixonado, cheio de energia, romântico e divertido.'),
('Wandinha', './assets/imgs/wandinha.jpg', 'Filha séria e inteligente, com humor mórbido e personalidade independente.'),
('Feioso', './assets/imgs/feioso.jpg', 'Filho curioso e energético, adora aventuras e experimentos perigosos.'),
('Tio Chico', './assets/imgs/tiochico.jpg', 'Tio excêntrico e amoroso, divertido e imprevisível, sempre ajuda a família.'),
('Mãozinha', './assets/imgs/maozinha.webp', 'Mão viva, esperta e leal, com personalidade própria e muito senso de humor.'),
('Pubert Addams', './assets/imgs/pubert.jpg', 'Bebê recém-nascido da família, fofinho mas já com traços peculiares, cercado de cuidado e amor da família.'),
('Tropeço', './assets/imgs/tropeco.jpg', 'Empregado dedicado da família Addams, discreto e eficiente, sempre cuidando das tarefas domésticas e apoiando todos os membros com lealdade.'),
('Vovó Addams', './assets/imgs/vovo.jpg', 'Idosa excêntrica e sábia, cheia de truques e remédios misteriosos, mantém a família entretida com suas histórias.');


INSERT INTO Caracteristica (nomeCaracteristica) VALUES
('Elegante e sombria'),       
('Romântico e excêntrico'),    
('Séria e inteligente'),       
('Curioso e energético'),     
('Ajuda e cuida de todos'),   
('Observa e planeja'),       
('Aventureiro e destemido'),  
('Calmo e discreto'),        
('Fofinho e peculiar'),        
('Idoso excêntrico e sábio'),  
('Excêntrico e amoroso'),      
('Esperto e leal'),           
('Discreto e eficiente'),     
('Experiente e conselheiro'), 
('Calmo e observador'),       
('Espontâneo e enérgico');    

SELECT * FROM Caracteristica;

INSERT INTO Usuario (nome, email, senha) VALUES
('João Silva', 'joao@email.com', '123456'),
('Maria Souza', 'maria@email.com', '123456'),
('Pedro Santos', 'pedro@email.com', '123456'),
('Ana Lima', 'ana@email.com', '123456'),
('Lucas Rocha', 'lucas@email.com', '123456');



INSERT INTO Resultado (fkQuiz, fkUsuario, fkCaracteristica) VALUES
(1, 1, 1),
(2, 2, 2), 
(3, 1, 3),  
(4, 4, 4),  
(5, 5, 11), 
(1, 2, 8), 
(2, 3, 14), 
(3, 4, 15), 
(4, 5, 16),  
(7, 2, 9),  
(8, 3, 13), 
(9, 1, 10);

SELECT * FROM Usuario;

INSERT INTO Usuario (nome, email, senha)VALUES
('Lily', 'lilly@gmail.com', '123');

INSERT INTO Resultado (fkQuiz, fkUsuario, fkCaracteristica) VALUES
(9,2,4);

INSERT INTO Usuario (nome, email, senha)VALUES
('amanda', 'amanda@gmail.com', '123');

SELECT * FROM Quiz;
SELECT * FROM Resultado;

SELECT r.idResultado,
u.nome AS nomeUsuario,
q.nome AS nomeQuiz,
c.nomeCaracteristica AS nomeCaracteristica
FROM Resultado r
JOIN Usuario u ON r.fkUsuario = u.idUsuario
JOIN Quiz q ON r.fkQuiz = q.idQuiz
JOIN Caracteristica c ON r.fkCaracteristica = c.idCaracteristica;

SELECT * FROM Usuario;

SELECT COUNT(*) AS total_usuarios
FROM Usuario;
SELECT COUNT(*) AS total_tentativa FROM Resultado
WHERE fkUsuario = 20;

SELECT * FROM Resultado;

SELECT c.nomeCaracteristica AS caracteristica,
COUNT(r.fkCaracteristica) AS quantidade
FROM resultado r
JOIN caracteristica c
ON r.fkCaracteristica = c.idCaracteristica
GROUP BY c.idCaracteristica, c.nomeCaracteristica
ORDER BY quantidade DESC;

SELECT * FROM Usuario;
    
SELECT q.nome AS personagem,
COUNT(r.fkQuiz) AS quantidade_escolhas
FROM resultado r
JOIN quiz q 
ON r.fkQuiz = q.idQuiz
GROUP BY q.idQuiz, q.nome
ORDER BY quantidade_escolhas DESC
LIMIT 5;

SELECT * FROM Quiz;
select * from Resultado;




