var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/dados", function(req, res) {
    dashboardController.obterDadosDashboard(req, res);
});


module.exports = router;