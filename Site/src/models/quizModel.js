
var database = require("../database/config");

function listarResultados() {
    console.log("Listando resultados do quiz...");

    var instrucao = `
        SELECT 
            p.nome AS personagem,
            COUNT(*) AS quantidade
        FROM RespostasUsuario r
        JOIN Personagens p ON r.fkPersonagem = p.idPersonagem
        GROUP BY p.nome
        ORDER BY quantidade DESC;
    `;

    console.log("Executando SQL:\n" + instrucao);
    return database.executar(instrucao);
}

function salvarResultado(idUsuario, idPersonagem) {

    var instrucao = `
        INSERT INTO RespostasUsuario (Perguntas, Alternativas, fkPersonagem, fkUsuario)
        VALUES ('Final', 'Resultado do Quiz', ${idPersonagem}, ${idUsuario});
    `;

    console.log("Executando SQL:\n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    listarResultados,
    salvarResultado
};
