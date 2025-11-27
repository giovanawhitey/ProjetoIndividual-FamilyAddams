//var ambiente_processo = 'producao';
var ambiente_processo = 'desenvolvimento';

var caminho_env = ambiente_processo === 'producao' ? '.env' : '.env.dev';
require("dotenv").config({ path: caminho_env });

var express = require("express");
var cors = require("cors");
var path = require("path");

var PORTA_APP = process.env.APP_PORT ;
var HOST_APP = process.env.APP_HOST ;

var app = express();

var indexRouter = require("./src/routes/index");
var usuarioRouter = require("./src/routes/usuarios");
var quizRouter = require("./src/routes/quiz");
var dashboardRouter = require("./src/routes/dashboard");
var caracteristicaRouter = require("./src/routes/caracteristica");
var resultadoRouter = require("./src/routes/resultado");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());


app.use("/", indexRouter);
app.use("/usuarios", usuarioRouter);
app.use("/quiz", quizRouter);
app.use("/dashboard", dashboardRouter);
app.use("/caracteristica", caracteristicaRouter);
app.use("/resultado", resultadoRouter);


app.listen(PORTA_APP, function () {
    console.log(`
    ##   ##  ######   #####             ####       ##     ######     ##              ##  ##    ####    ######  
    ##   ##  ##       ##  ##            ## ##     ####      ##      ####             ##  ##     ##         ##  
    ##   ##  ##       ##  ##            ##  ##   ##  ##     ##     ##  ##            ##  ##     ##        ##   
    ## # ##  ####     #####    ######   ##  ##   ######     ##     ######   ######   ##  ##     ##       ##    
    #######  ##       ##  ##            ##  ##   ##  ##     ##     ##  ##            ##  ##     ##      ##     
    ### ###  ##       ##  ##            ## ##    ##  ##     ##     ##  ##             ####      ##     ##      
    ##   ##  ######   #####             ####     ##  ##     ##     ##  ##              ##      ####    ######  

    Servidor do seu site já está rodando! 
    Acesse:   http://${HOST_APP}:${PORTA_APP}

    Você está rodando sua aplicação em ambiente de:  ${process.env.AMBIENTE_PROCESSO}

        Se • desenvolvimento • está conectando ao banco LOCAL.
        Se • produção       • está conectando ao banco REMOTO.

        Para alterar o ambiente, mexa nas linhas 1 e 2 do arquivo 'app.js'
    `);
});
