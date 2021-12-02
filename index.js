const { request } = require("express");
var express = require("express");
var apiServer = express();

var port = 3000;
var host = "localhost";
apiServer.listen(port, host, ()=>{
    console.log("sever running at http://%s:%d", host, port);
});

apiServer.get("/", (request, response) => {
    console.log("sono in get /", request);
    response.send("Ciao client sei in home");
});

apiServer.get("/nome", (request, response) => {
    console.log("sono in get /nome", request);
    response.send("Federico");
});

apiServer.get("/mioNome", (request, response) => {
    response.send("il tuo nome è " + request.query.nome);
});

apiServer.get("/somma", (request, response) => {
    response.send("il numero A è " + request.query.a);
    response.send("il numero B è " + request.query.b);
    response.send("il risultato è " + (request.query.a) + (request.query.b));
});