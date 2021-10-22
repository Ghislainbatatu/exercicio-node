const mongoose = require('mongoose');

//buscando model
const usuarios = mongoose.model('usuarios')

//criando post
exports.post = function(requisition,resposta){
    const cadastrar = new usuarios(requisition.body)
    
    cadastrar.save(function(erro,usuarios){
        if(erro){
            resposta.status(400).send({erro})
        }
        else{
            resposta.status(201).send({usuarios})
        }
    })
}

//criando get
exports.buscar = function(requisition,resposta){
    usuarios.find({},function(erro,usuarios){
        if(erro){
            resposta.status(404).send({erro})
        }
        else{
            resposta.status(200).send({usuarios})
            
        }

    })
}
//get pelo ID
exports.id= function(req,res){
    usuarios.findOne({"_id":req.params.id},function(erro,encontrado){
        if(erro){
            res.send({erro:"Não encontrado "})
        }else{
            res.send({encontrado})
        }
    })
}
//put
exports.atualizar= function(req,res){
    usuarios.findOneAndUpdate({_id:req.params.id},req.body,{new:true},function(erro, encontrado){
        if(erro){
            res.send({erro:"Não foi possivel atualizar"})
        }else{
            res.send({encontrado})
        }
    })
}
//delele
exports.delete=function(req,res){
    usuarios.deleteOne({_id:req.params.id},function(erro){
        if(erro){
            res.send({erro:"Não foi possivel eliminar"})
        }else{
            res.send({messagem:"eliminado com succeso"})
        }
    })
}