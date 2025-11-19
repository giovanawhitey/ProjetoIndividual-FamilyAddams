var database = require("../database/config");

function contarUsuarios() {
    var instrucao = `
        SELECT COUNT(*) AS total FROM Usuario;
    `;
    return database.executar(instrucao);
}

function personagemMaisEscolhido() {
    var instrucao = `
        SELECT p.nome, COUNT(r.fkPersonagem) AS quantidade 
        FROM RespostasUsuario r
        JOIN Personagens p ON r.fkPersonagem = p.idPersonagem
        GROUP BY p.nome
        ORDER BY quantidade DESC
        LIMIT 1;
    `;
    return database.executar(instrucao);
}

function caracteristicaMaisEscolhida() {
    var instrucao = `
        SELECT Alternativas AS caracteristica, COUNT(*) AS quantidade
        FROM RespostasUsuario
        GROUP BY Alternativas
        ORDER BY quantidade DESC
        LIMIT 1;
    `;
    return database.executar(instrucao);
}

function graficoCaracteristicas() {
    var instrucao = `
        SELECT Alternativas AS caracteristica, COUNT(*) AS quantidade
        FROM RespostasUsuario
        GROUP BY Alternativas
        ORDER BY quantidade DESC;
    `;
    return database.executar(instrucao);
}

function graficoTopPersonagens() {
    var instrucao = `
        SELECT p.nome AS personagem, COUNT(r.fkPersonagem) AS quantidade
        FROM RespostasUsuario r
        JOIN Personagens p ON r.fkPersonagem = p.idPersonagem
        GROUP BY p.nome
        ORDER BY quantidade DESC
        LIMIT 5;
    `;
    return database.executar(instrucao);
}

module.exports = {
    contarUsuarios,
    personagemMaisEscolhido,
    caracteristicaMaisEscolhida,
    graficoCaracteristicas,
    graficoTopPersonagens
}
