var quizModel = require("../models/quizModel");

function listar(req, res) {
    console.log("Listando todos os personagens (quiz)");

    quizModel.listar().then(function(resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum personagem encontrado!");
        }
    }).catch(function(erro) {
        console.log("Houve um erro ao listar os personagens.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = { listar };
