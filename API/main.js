//var, globales;
//let, variables de scope {};
//const, constantes.
const express = require('express');
const medicion = require('./routes/medicion.js');

//Default port = 80;
//port for local testing = 3000;
//tec.mx | pagina.com:8080.
const app = express();
const port = process.env.PORT || 3000;

//Conversor a json el contenido de una peticion
app.use(express.json());
app.use('/', medicion);

app.listen(port, () => {
    console.log(`Servicior iniciado en el puerto ${port}`);
})



/* 
En C:
int suma(int x, int y){
    return x + y;
}

En JS: 
const suma = function(x, y){
    return x + y;
}

Funciones lambda o Arrow functions:
(parametros) => cuerpo
const suma = (x, y) => x + y; // retorno implicito (no hay return, 1 sola expresion)

//Retorno explicito, + de 1 expresion
const suma = (x, y) => {
    return x + y;
}

const function = () => {
    console.log("...")
}
app.listen(port, function);
}
*/

/*
    const cadena = "Puerto: " + port;
    Interpololacion de cadenas | String literals
    const cadena = `Puerto: ${port}`;
*/