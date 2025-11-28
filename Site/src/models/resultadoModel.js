var database = require("../database/config");

function obterDadosUsuario(req, res) {
    console.log("Obtendo dados da dashboard do usuário");

    var idUsuario = req.params.idUsuario;

    var sqlCaracteristicas = `
        SELECT C.nomeCaracteristica, COUNT(R.idResultado) AS votos
        FROM Resultado R
        JOIN Caracteristica C ON R.fkCaracteristica = C.idCaracteristica
        WHERE R.fkUsuario = ${idUsuario}
        GROUP BY C.nomeCaracteristica
        ORDER BY votos DESC
    `;

    var sqlPersonagens = `
        SELECT Q.nome, COUNT(R.idResultado) AS votos
        FROM Resultado R
        JOIN Quiz Q ON R.fkQuiz = Q.idQuiz
        WHERE R.fkUsuario = ${idUsuario}
        GROUP BY Q.nome
        ORDER BY votos DESC
    `;

    var sqlTentativas = `
        SELECT COUNT(*) AS totalTentativas
        FROM Resultado
        WHERE fkUsuario = ${idUsuario}
    `;
}
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

function buscarUltimoPersonagem(idUsuario) {
    var instrucaoSql = `
            SELECT 
            Q.nome AS ultimoPersonagem
        FROM Resultado R
        JOIN Quiz Q ON R.fkQuiz = Q.idQuiz
        WHERE R.fkUsuario = ${idUsuario}
        ORDER BY R.idResultado DESC
        LIMIT 1;
    `;
    return database.executar(instrucaoSql);
}

function personagemUser(idUsuario) {
    var instrucaoSql = `
        SELECT Q.nome, COUNT(*) AS votos
        FROM Resultado R
        JOIN Quiz Q ON R.fkQuiz = Q.idQuiz
        WHERE R.fkUsuario = ${idUsuario}
        GROUP BY Q.nome
        ORDER BY votos DESC
        LIMIT 5;
    `;
    return database.executar(instrucaoSql);
}

function caracteristicaUser(idUsuario) {
    var instrucaoSql = `
         SELECT C.nomeCaracteristica, COUNT(*) AS votos
        FROM Resultado R
        JOIN Caracteristica C ON R.fkCaracteristica = C.idCaracteristica
        WHERE R.fkUsuario = ${idUsuario}
        GROUP BY C.nomeCaracteristica
        ORDER BY votos DESC
        LIMIT 5;
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    listar,
    cadastrar,
    buscarResultadoFkUsuario,
    personagemUser,
    caracteristicaUser, 
};
