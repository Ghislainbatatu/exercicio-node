//requirindo o modulo express
const express = require("express");
//requirindo o modulo mongoose
const mongoose = require("mongoose");
// criando app que recebe express
const app = express();
//criando minha porta
const porta = 8081

//requirindo model
const model = require('./model/model')
app.use(express.json());

//conectando banco de dados
mongoose.connect('mongodb://localhost/praticando').then(function(){
    console.log("conectando com sucesso")
}).catch(function(erro){
    console.log("falha ao se conectar: "+erro)
})
//requirindo rotas
const rotas = require('./controller/rotas/rota')
rotas(app);








//sentindo app que  criei
app.listen(porta,function(){
    console.log("app rodando no link http://localhost:"+porta+'/usuarios')
})