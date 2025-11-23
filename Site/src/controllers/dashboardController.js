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

    database.executar(sqlCaracteristicas).then(function(caracteristicas) {
        database.executar(sqlPersonagens).then(function(personagens) {
            database.executar(sqlTentativas).then(function(tentativas) {

                res.status(200).json({
                    caracteristicas: caracteristicas,
                    personagens: personagens,
                    tentativas: tentativas[0].totalTentativas
                });

            }).catch(function(erro) {
                console.log("Erro ao obter tentativas:", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
        }).catch(function(erro) {
            console.log("Erro ao obter personagens:", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
    }).catch(function(erro) {
        console.log("Erro ao obter características:", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    obterDadosUsuario
};
