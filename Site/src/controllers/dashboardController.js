var database = require("../database/config");

function obterDadosDashboard(req, res) {
    console.log("Obtendo dados da dashboard");

    var sqlUsuarios = "SELECT COUNT(*) AS totalUsuarios FROM Usuario";
    var sqlResultados = "SELECT COUNT(*) AS totalResultados FROM Resultado";
    var sqlTopPersonagens = `
        SELECT Q.nome, COUNT(R.idResultado) AS votos
        FROM Resultado R
        JOIN Quiz Q ON R.fkQuiz = Q.idQuiz
        GROUP BY Q.nome
        ORDER BY votos DESC
        LIMIT 5
    `;
    var sqlTopCaracteristicas = `
        SELECT C.nomeCaracteristica, COUNT(R.idResultado) AS votos
        FROM Resultado R
        JOIN Caracteristica C ON R.fkCaracteristica = C.idCaracteristica
        GROUP BY C.nomeCaracteristica
        ORDER BY votos DESC
        LIMIT 5
    `;

    database.executar(sqlUsuarios).then(function(usuarios) {
        database.executar(sqlResultados).then(function(resultados) {
            database.executar(sqlTopPersonagens).then(function(topPersonagens) {
                database.executar(sqlTopCaracteristicas).then(function(topCaracteristicas) {
                    res.status(200).json({
                        totalUsuarios: usuarios[0].totalUsuarios,
                        totalResultados: resultados[0].totalResultados,
                        topPersonagens,
                        topCaracteristicas
                    });
                }).catch(function(erro) {
                    console.log("Erro ao obter top características.", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                });
            }).catch(function(erro) {
                console.log("Erro ao obter top personagens.", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
        }).catch(function(erro) {
            console.log("Erro ao contar resultados.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
    }).catch(function(erro) {
        console.log("Erro ao contar usuários.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    obterDadosDashboard
};
