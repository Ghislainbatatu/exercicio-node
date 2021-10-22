const mongoose = require('mongoose');
const schema = mongoose.Schema;

//nome, sobrinome,

const usuario = new schema({
    nome : {type:String},
    sobrenome : {type: String},
})

module.exports= mongoose.model('usuarios',usuario)