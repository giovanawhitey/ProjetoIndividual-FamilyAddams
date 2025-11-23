var database = require("../database/config");

function carregarKpis(idUsuario) {
  var instrucao = `
        SELECT 
            q.nome AS personagem,
            COUNT(r.fkQuiz) AS quantidade_escolhas
        FROM Resultado r
        JOIN Quiz q 
            ON r.fkQuiz = q.idQuiz
        WHERE r.fkUsuario = ${idUsuario}
        GROUP BY q.idQuiz, q.nome
        ORDER BY quantidade_escolhas DESC;
    `;
  return database.executar(instrucao);
}

function carregarTopPersonagens(idUsuario) {
  var instrucao = `
        SELECT 
            q.nome AS personagem,
            COUNT(r.fkQuiz) AS quantidade_escolhas
        FROM Resultado r
        JOIN Quiz q 
            ON r.fkQuiz = q.idQuiz
        WHERE r.fkUsuario = ${idUsuario}
        GROUP BY q.idQuiz, q.nome
        ORDER BY quantidade_escolhas DESC
        LIMIT 5;
    `;
  return database.executar(instrucao);
}

function listarPersonagensComuns(idUsuario) {
  var instrucao = `
        SELECT 
            q.nome AS personagem,
            COUNT(r.fkQuiz) AS quantidade_escolhas
        FROM Resultado r
        JOIN Quiz q 
            ON r.fkQuiz = q.idQuiz
        WHERE r.fkUsuario = ${idUsuario}
        GROUP BY q.idQuiz, q.nome
        ORDER BY quantidade_escolhas DESC
        LIMIT 1;
    `;
  return database.executar(instrucao);
}

module.exports = {
  carregarKpis,
  carregarTopPersonagens,
  listarPersonagensComuns
};
