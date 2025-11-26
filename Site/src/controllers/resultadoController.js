var resultadoModel = require("../models/resultadoModel");

function cadastrar(req, res) {
  var resultado = req.body;

  resultadoModel
    .cadastrar(
      resultado.fkQuiz,
      resultado.fkUsuario,
      resultado.fkCaracteristica
    )
    .then(function (resultadoInserido) {
      res.status(200).json(resultadoInserido);
    })
    .catch(function (erro) {
      console.log("Houve um erro ao cadastrar o resultado.", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}

function listar(req, res) {
  resultadoModel
    .listar()
    .then(function (resultado) {
      if (resultado.length > 0) {
        res.status(200).json(resultado);
      } else {
        res.status(204).send("Nenhum resultado encontrado!");
      }
    })
    .catch(function (erro) {
      console.log("Erro ao listar resultados.", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}

function buscarResultadoFkUsuario(req, res) {
  const idUsuario = req.params.id;

  resultadoModel
    .buscarResultadoFkUsuario(idUsuario)
    .then(function (resultado) {
      const tentativas = resultado[0].total_tentativas;
      res.json({ tentativas });
    })
    .catch(function (erro) {
      console.error("Erro ao buscar tentativas:", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}

function personagemUser(req, res) {
  var idUsuario = req.params.idUsuario;

  resultadoModel
    .personagemUser(idUsuario)
    .then(function (resultado) {
      res.status(200).json(resultado);
    })
    .catch(function (erro) {
      console.log("Erro ao buscar personagens do usuário.", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}

function caracteristicaUser(req, res) {
  var idUsuario = req.params.idUsuario;

  resultadoModel
    .caracteristicaUser(idUsuario)
    .then(function (resultado) {
      res.status(200).json(resultado);
    })
    .catch(function (erro) {
      console.log("Erro ao buscar características do usuário.", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}


function obterUltimoPersonagem(req, res) {
    var idUsuario = req.params.idUsuario; 

    resultadoModel.buscarUltimoPersonagem(idUsuario)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado[0]); 
            } else {
                res.status(204).send("Nenhum resultado encontrado para este usuário.");
            }
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar o último personagem:", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}


module.exports = {
  cadastrar,
  listar,
  buscarResultadoFkUsuario,
  personagemUser,
  caracteristicaUser, 
  obterUltimoPersonagem
};
