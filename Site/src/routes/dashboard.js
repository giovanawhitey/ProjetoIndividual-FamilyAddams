var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/contar-usuarios", (req, res) => {
    dashboardController.contarUsuarios(req, res);
});

router.get("/personagem-mais-escolhido", (req, res) => {
    dashboardController.personagemMaisEscolhido(req, res);
});

router.get("/caracteristica-mais-escolhida", (req, res) => {
    dashboardController.caracteristicaMaisEscolhida(req, res);
});

router.get("/caracteristicas", (req, res) => {
    dashboardController.graficoCaracteristicas(req, res);
});

router.get("/top-personagens", (req, res) => {
    dashboardController.graficoTopPersonagens(req, res);
});

module.exports = router;
