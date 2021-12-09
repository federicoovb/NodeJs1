const { request } = require("express");
var express = require("express");
var apiServer = express();
var fs = require("fs");

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
    console.log("somma request", request);
    //Per sommare due stringhe si usa - - 
        //response.send("risultato = " + (request.query.a -(-request.query.b)));
    //Alternativa più pulita per sommare le due somme
    response.send("risultato = " + (parseInt(request.query.a) + parseInt(request.query.b)));
});

apiServer.get("/student", (request, response) => {
    console.log("student id: ", request.query.id);
    //leggere il file
    fs.readFile("studenti.json", (err, data) => {
        if(err) {
            console.log("error: " + err);
        } else {
            var students = JSON.parse(data);
            for(i = 0; i < students.length; i++){                
                console.log("students"+students[i].id+" surname: " + students[i].surname);
                console.log("students"+students[i].id+" name: " + students[i].name);
            }
        }
    });
    //prelevare l'oggetto con id 1
    //send
});

apiServer.get("/newStudent", (request, response) => {
    console.log("student id: ", request.query.id);
    fs.writeFile("studenti.json", (err, data) => {        
        if(err) {
            console.log("error: " + err);
        } else {
            var students = JSON.parse(data);
            //students.push(request.query.surname);
            //students.push(request.query.name);
            //students.push(request.query.id);
            request.query.surname.push(student[request.query.id]);
            request.query.name.push(student[request.query.id]);            
        }
    });

    //http://localhost:3000/newStudent?surname=violaboros&name=federico&id=9

});