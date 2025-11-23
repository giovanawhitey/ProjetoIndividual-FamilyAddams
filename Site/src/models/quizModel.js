var database = require("../database/config");

function buscarPorId(id) {
    var instrucaoSql = `SELECT * FROM Quiz WHERE idQuiz = '${id}'`;
    return database.executar(instrucaoSql);
}

function listar() {
    var instrucaoSql = `SELECT idQuiz, nome, descricao, img FROM Quiz`;
    return database.executar(instrucaoSql);
}

function cadastrar(nome, descricao, img) {
    var instrucaoSql = `INSERT INTO Quiz (nome, descricao, img) VALUES ('${nome}', '${descricao}', '${img}')`;
    return database.executar(instrucaoSql);
}

module.exports = { buscarPorId, listar, cadastrar };
