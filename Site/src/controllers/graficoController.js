var graficoModel = require("../models/graficoModel");

function buscarCaracteristicas(req, res) {

    console.log("Buscando dados das características...");

    graficoModel.buscarCaracteristicas()
        .then((resultado) => {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhuma característica encontrada!");
            }
        })
        .catch((erro) => {
            console.log("Erro ao buscar características:", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function buscarCaracteristicasTempoReal(req, res) {

    graficoModel.buscarCaracteristicasTempoReal()
        .then((resultado) => {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum dado encontrado!");
            }
        })
        .catch((erro) => {
            console.log("Erro ao buscar dados em tempo real:", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function buscarPersonagens(req, res) {

    console.log("Buscando quantidade de personagens...");

    graficoModel.buscarPersonagens()
        .then((resultado) => {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum personagem encontrado!");
            }
        })
        .catch((erro) => {
            console.log("Erro ao buscar personagens:", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function buscarPersonagensTempoReal(req, res) {

    graficoModel.buscarPersonagensTempoReal()
        .then((resultado) => {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum dado encontrado!");
            }
        })
        .catch((erro) => {
            console.log("Erro ao buscar tempo real de personagens:", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    buscarCaracteristicas,
    buscarCaracteristicasTempoReal,
    buscarPersonagens,
    buscarPersonagensTempoReal
};
