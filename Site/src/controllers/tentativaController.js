var tentativaModel = require("../models/tentativaModel");

function cadastrar(req, res) {
    var fkUsuario = req.body.fkUsuario;
    var dataHora = req.body.dataHora;

    if (fkUsuario == undefined) {
        res.status(400).send("O fkUsuario é obrigatório");
        return;
    }

    tentativaModel.cadastrar(fkUsuario, dataHora)
        .then(function (resultado) {
            res.status(201).json({
                idTentativa: resultado.insertId,
                fkUsuario: fkUsuario,
                dataHora: dataHora
            });
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao cadastrar a tentativa.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function listar(req, res) {
    tentativaModel.listar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhuma tentativa encontrada");
            }
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao listar as tentativas.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    cadastrar,
    listar
};
