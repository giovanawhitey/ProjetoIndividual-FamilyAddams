var resultadoModel = require("../models/resultadoModel");

function cadastrar(req, res) {
  var resultado = req.body;
  console.log(`Cadastrando resultado para usuário ${resultado.fkUsuario}`);

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
  console.log("Listando todos os resultados");

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
      console.log("Houve um erro ao listar os resultados.", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}






function buscarResultadoFkUsuario(req, res) {
  const idUsuario = req.params.id;

  if (!idUsuario) {
    return res.status(400).json({ erro: "ID do usuário não fornecido" });
  }

  resultadoModel
    .buscarResultadoFkUsuario(idUsuario)
    .then(resultado => {
      const tentativas = resultado[0].total_tentativas;
      res.json({ tentativas });
    })
    .catch(erro => {
      console.error("Erro ao buscar tentativas:", erro.sqlMessage || erro);
      res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
  cadastrar,
  listar,
  buscarResultadoFkUsuario,
};
