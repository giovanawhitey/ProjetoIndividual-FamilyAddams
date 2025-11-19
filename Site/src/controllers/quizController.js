var quizModel = require("../models/quizModel");

function listarRespostas(req, res) {
  quizModel.listarRespostas()
    .then((resultado) => {
      if (resultado.length > 0) {
        res.status(200).json(resultado);
      } else {
        res.status(204).send("Nenhuma resposta encontrada!");
      }
    })
    .catch((erro) => {
      console.log("Erro ao listar respostas:", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}

function cadastrarResposta(req, res) {
  var pergunta = req.body.pergunta;
  var alternativa = req.body.alternativa;
  var fkPersonagem = req.body.fkPersonagem;
  var fkUsuario = req.body.fkUsuario;

  if (pergunta == undefined) {
    res.status(400).send("pergunta está undefined!");
  } else if (alternativa == undefined) {
    res.status(400).send("alternativa está undefined!");
  } else if (fkPersonagem == undefined) {
    res.status(400).send("fkPersonagem está undefined!");
  } else if (fkUsuario == undefined) {
    res.status(400).send("fkUsuario está undefined!");
  } else {

    quizModel.cadastrarResposta(pergunta, alternativa, fkPersonagem, fkUsuario)
      .then((resultado) => {
        res.status(201).json(resultado);
      })
      .catch((erro) => {
        console.log("Erro ao cadastrar resposta:", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
      });
  }
}

module.exports = {
  listarRespostas,
  cadastrarResposta
};
