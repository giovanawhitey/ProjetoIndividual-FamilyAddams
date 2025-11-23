var express = require("express");
var router = express.Router();

var resultadoController = require("../controllers/resultadoController");

router.post("/cadastrar", function(req, res) {
    resultadoController.cadastrar(req, res);
});

router.get("/listar", function(req, res) {
    resultadoController.listar(req, res);
});

router.get("/tentativas/:id", function(req, res) {
    resultadoController.buscarResultadoFkUsuario(req, res);
});


module.exports = router;
