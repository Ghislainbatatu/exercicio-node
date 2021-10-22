//criando rota
module.exports = function(rota){
    const usuarios = require('../control')
    rota.route('/usuarios').post(usuarios.post)
    rota.route('/usuarios').get(usuarios.buscar)
    
}
