var database = require("../database/config");

function autenticar(email, senha) {
  var instrucaoSql = `SELECT * FROM Usuario WHERE email = '${email}' AND senha = '${senha}';`;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrar(nome, email, senha) {
  var instrucaoSql = `INSERT INTO Usuario (nome, email, senha) VALUES ('${nome}', '${email}', '${senha}');`;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}
function listarTodos() {
  var instrucaoSql = `SELECT COUNT(*) AS total_usuarios
FROM Usuario`;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  autenticar,
  cadastrar,
  listarTodos,
};
