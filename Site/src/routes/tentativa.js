var express = require("express");
var router = express.Router();

var tentativaController = require("../controllers/tentativaController");

router.post("/cadastrar", function(req, res) {
    tentativaController.cadastrar(req, res);
});

router.get("/listar", function(req, res) {
    tentativaController.listar(req, res);
})

module.exports = router;
