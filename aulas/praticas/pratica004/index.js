const express = require('express');

const app = express();

app.listen(3000, function(){
    console.log("API está ON!");
})

app.use(express.json());


app.get("/", function(req, res){
    res.status(200).send("Você fez uma requisição GET");
})

app.post("/", function(req, res){
    res.status(201).send("SUCESSO")
})


app.put("/", function(req, res){
    res.status(200).end();
})

app.delete("/", function(req, res){
    res.status(204).send("SUCESSO")
    // throw new Excpetion();
})

app.use(function(error, req, res, next){
    res.status(400).send("Deu ruim!");
})

module.exports = app;