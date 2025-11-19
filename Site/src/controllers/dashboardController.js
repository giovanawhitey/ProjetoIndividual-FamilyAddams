var dashboardModel = require("../models/dashboardModel");

function contarUsuarios(req, res) {
    dashboardModel.contarUsuarios()
        .then(result => res.json(result[0]))   
        .catch(erro => {
            console.log("Erro:", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function personagemMaisEscolhido(req, res) {
    dashboardModel.personagemMaisEscolhido()
        .then(result => res.json(result[0]))   
        .catch(erro => {
            console.log("Erro:", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function caracteristicaMaisEscolhida(req, res) {
    dashboardModel.caracteristicaMaisEscolhida()
        .then(result => res.json(result[0]))   
        .catch(erro => {
            console.log("Erro:", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function graficoCaracteristicas(req, res) {
    dashboardModel.graficoCaracteristicas()
        .then(result => res.json(result)) 
        .catch(erro => {
            console.log(erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function graficoTopPersonagens(req, res) {
    dashboardModel.graficoTopPersonagens()
        .then(result => res.json(result)) 
        .catch(erro => {
            console.log(erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    contarUsuarios,
    personagemMaisEscolhido,
    caracteristicaMaisEscolhida,
    graficoCaracteristicas,
    graficoTopPersonagens
};
