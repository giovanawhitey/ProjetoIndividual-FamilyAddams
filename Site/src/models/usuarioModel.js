var database = require("../database/config");


function autenticar(email, senha) {
    console.log("Autenticando usuário:", email);

    var instrucaoSql = `
        SELECT idUsuario, nome, email 
        FROM Usuario 
        WHERE email = '${email}' AND senha = '${senha}';
    `;

    console.log("Executando SQL:\n", instrucaoSql);

    return database.executar(instrucaoSql);
}


function cadastrar(nome, email, senha) {
    console.log("Cadastrando usuário:", nome, email);

    var instrucaoSql = `
        INSERT INTO Usuario (nome, email, senha) 
        VALUES ('${nome}', '${email}', '${senha}');
    `;

    console.log("Executando SQL:\n", instrucaoSql);

    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    cadastrar
};
