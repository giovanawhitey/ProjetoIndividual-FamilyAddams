var database = require("../database/config");

function buscarPorId(id) {
    var instrucaoSql = `SELECT * FROM Caracteristica WHERE idCaracteristica = '${id}'`;
    return database.executar(instrucaoSql);
}

function listar() {
    var instrucaoSql = `SELECT idCaracteristica, nomeCaracteristica FROM Caracteristica`;
    return database.executar(instrucaoSql);
}

function cadastrar(nomeCaracteristica) {
    var instrucaoSql = `INSERT INTO Caracteristica (nomeCaracteristica) VALUES ('${nomeCaracteristica}')`;
    return database.executar(instrucaoSql);
}

module.exports = { buscarPorId, listar, cadastrar };
