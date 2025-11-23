var database = require("../database/config");

function carregarKpis() {
  var instrucao = `
        SELECT c.nome AS caracteristica,
               COUNT(*) AS quantidade
        FROM Resposta r
        JOIN Caracteristica c 
            ON r.fkCaracteristica = c.idCaracteristica
        GROUP BY c.nome
        ORDER BY quantidade DESC;
    `;
  return database.executar(instrucaoSql);
}

function carregarTopPersonagens() {
  var instrucao = `
       SELECT 
    q.nome AS personagem,
    COUNT(r.fkQuiz) AS quantidade_escolhas
FROM resultado r
JOIN quiz q 
    ON r.fkQuiz = q.idQuiz
GROUP BY q.idQuiz, q.nome
ORDER BY quantidade_escolhas DESC
LIMIT 5
    `;
  return database.executar(instrucaoSql);
}

function caracteristicaComum() {
  var instrucao = `
        SELECT 
    c.nomeCaracteristica AS caracteristica,
    COUNT(r.fkCaracteristica) AS quantidade
FROM resultado r
JOIN caracteristica c
    ON r.fkCaracteristica = c.idCaracteristica
GROUP BY c.idCaracteristica, c.nomeCaracteristica
ORDER BY quantidade DESC;`;
  return database.executar(instrucaoSql);
}

function listarPersonagensComuns() {
  var instrucao = `
        SELECT 
    q.nome AS personagem,
    COUNT(r.fkQuiz) AS quantidade_escolhas
FROM resultado r
JOIN quiz q 
    ON r.fkQuiz = q.idQuiz
GROUP BY q.idQuiz, q.nome
ORDER BY quantidade_escolhas DESC
LIMIT 1;
        `;
  return database.executar(instrucaoSql);
}

module.exports = {
  carregarCaracteristicas,
  carregarTopPersonagens,
  caracteristicaComum,
  carregarResultados,
  listarPersonagensComuns,
};
