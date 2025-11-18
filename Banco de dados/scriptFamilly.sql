CREATE DATABASE ProjetoFA;

USE ProjetoFA;

CREATE TABLE Usuario (
    idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    email VARCHAR(45),
    senha VARCHAR(45)
);

CREATE TABLE Personagens (
    idPersonagem INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    descricao VARCHAR(255)
);

CREATE TABLE Perguntas (
    idPerguntas INT PRIMARY KEY AUTO_INCREMENT,
    texto VARCHAR(100),
    ordem INT
);

CREATE TABLE Alternativas (
    idAlternativas INT PRIMARY KEY AUTO_INCREMENT,
    texto VARCHAR(200),
    fkPerguntas INT,
    FOREIGN KEY (fkPerguntas) REFERENCES Perguntas(idPerguntas)
);

CREATE TABLE alternativaPersonagem (
    idAlternativas INT,
    idPersonagem INT,
    PRIMARY KEY (idAlternativas, idPersonagem),
    FOREIGN KEY (idAlternativas) REFERENCES Alternativas(idAlternativas),
    FOREIGN KEY (idPersonagem) REFERENCES Personagens(idPersonagem)
);

CREATE TABLE RespostasUsuario (
    idRespostasUsuario INT PRIMARY KEY AUTO_INCREMENT,
    idUsuario INT,
    idPerguntas INT,
    idAlternativas INT,
    FOREIGN KEY (idUsuario) REFERENCES Usuario(idUsuario),
    FOREIGN KEY (idPerguntas) REFERENCES Perguntas(idPerguntas),
    FOREIGN KEY (idAlternativas) REFERENCES Alternativas(idAlternativas)
);

INSERT INTO Personagens (nome, descricao) VALUES
("Mortícia Addams", "Matriarca elegante e sombria, carinhosa e protetora, mantém a família unida."),
("Gomez Addams", "Patriarca excêntrico e apaixonado, cheio de energia, romântico e divertido."),
("Wandinha", "Filha séria e inteligente, com humor mórbido e personalidade independente."),
("Feioso", "Filho curioso e energético, adora aventuras e experimentos perigosos"),
("Tio Chico", "Tio excêntrico e amoroso, divertido e imprevisível, sempre ajuda a família."),
("Mãozinha", "Mão viva, esperta e leal, com personalidade própria e muito senso de humor."),
("Pubert Addams", "Bebê recém-nascido da família, fofinho mas já com traços peculiares."),
("Tropeço", "Empregado dedicado, discreto e eficiente, sempre apoiando a família."),
("Vovó Addams", "Idosa excêntrica e sábia, cheia de truques misteriosos, sempre divertida.");