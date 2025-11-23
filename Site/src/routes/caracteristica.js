var express = require("express");
var router = express.Router();

var caracteristicaController = require("../controllers/caracteristicaController");

router.get("/listar", function(req, res) {
    caracteristicaController.listar(req, res);
});

module.exports = router;
