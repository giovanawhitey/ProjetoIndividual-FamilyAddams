var database = require("../database/config");

function listar() {
    var instrucaoSql = `
        SELECT 
            r.idResultado,
            u.nome AS nomeUsuario,
            q.nome AS nomeQuiz,
            c.nomeCaracteristica AS nomeCaracteristica
        FROM Resultado r
        JOIN Usuario u ON r.fkUsuario = u.idUsuario
        JOIN Quiz q ON r.fkQuiz = q.idQuiz
        JOIN Caracteristica c ON r.fkCaracteristica = c.idCaracteristica;
    `;
    return database.executar(instrucaoSql);
}

function cadastrar(fkQuiz, fkUsuario, fkCaracteristica) {
    fkQuiz = parseInt(fkQuiz);
    fkUsuario = parseInt(fkUsuario);
    fkCaracteristica = parseInt(fkCaracteristica);

    var instrucaoSql = `
        INSERT INTO Resultado (fkQuiz, fkUsuario, fkCaracteristica)
        VALUES (${fkQuiz}, ${fkUsuario}, ${fkCaracteristica})
    `;
    return database.executar(instrucaoSql);
}

function buscarResultadoFkUsuario(idUsuario) {
    var instrucaoSql = `
        SELECT COUNT(*) AS total_tentativas
        FROM Resultado
        WHERE fkUsuario = ${idUsuario};
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    listar,
    cadastrar,
    buscarResultadoFkUsuario
};
