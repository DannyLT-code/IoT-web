const pool = require('../helpers/mysql-config.js');

module.exports.insertarMedicion = (req, res) => {
        const tipo = req.params.tipo;
        const valor = req.body.valor;
    
        const sql = "INSERT INTO medicion(tipo, valor) VALUES(?, ?)";
        // 1. Sentencia, 2. Parametros, es un arreglo, 3. Funcion callback
        // Callback, funcion que se ejecuta al terminar una accion o evento
        pool.query(sql, [tipo, valor], (error, results, fields) => {
        if(error)
            res.send(error)
        res.json(results);
        })
        //res.send(`Recibi el valor ${body.valor}`);
}


module.exports.obtenerMedicionPorTipo = (req, res) => {
    const tipo = req.params.tipo;
    const sql = "SELECT * FROM medicion WHERE tipo = ?";
    pool.query(sql, [tipo], (error, results, fields) => {
    if(error)
        res.send(error)
    res.json(results);
    })
} 
module.exports.obtenerMediciones = (req, res) => {
        const sql = "SELECT * FROM medicion";
        pool.query(sql, (error, results, fields) => {
        if(error)
            res.send(error)
        res.json(results);
        })
}

module.exports.insertarMedicion = (req, res) => {
    
    
}

module.exports.actualizarMedicion = (req, res) => {
   
}

module.exports.eliminarMedicion = (req, res) => {  
    
}






