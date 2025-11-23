var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/dadosUsuario/:idUsuario", function(req, res) {
    dashboardController.obterDadosUsuario(req, res);
});


module.exports = router;