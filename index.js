//Iniciamos un proyecto
/*
1-. npm init
******le damos continuar a todo*****
2.- creamos un archivo nuevo llamado index.js
*/
//Instalamos los paquetes que vamos a usar 
/*
npm i nodemon
npm i express
npm i cors
npm i body-parser
npm i mongoose
*/

//Importamos los paquetes y declaramos constantes
const express = require('express');
const app = express();
const cors = require('cors');
const parser = require('body-parser');

//Importamos la conexion con la base de datos en mongoose
const conexion = require('./conexion');
conexion();

//Llamamos a configuraciones que nos ayudaran a configurar el servidor
app.use(cors());
app.use(parser.json());
app.use(parser.urlencoded({extended: true}));

app.get("/Hola", (req, res) => {
    console.log("Hola Mundo");
    res.send("Hola Mundo");
})
/*
El Objetivo de las rutas es crear links para que clientes ajenos a nosostros puedan acceder al servidor y manipular datos, ya se en una base de datos o cosas externas
Importamos la ruta que se va a usar
para esto necesitamos entender como se crea una ruta, estas rutas se alojan en la direccion Server> Rutas, sin embargo para poder entender como se forman las acciones que hace la ruta y su objetivo 
es necesario ir a Server > Modelos y seguir el ejemplo escrito.
*/
const Modelo1Ruta = require("./Server/Rutas/Modelo1Ruta");
app.use("/Registro", Modelo1Ruta);

//Activamos el servidor en el puerto asignado (en este caso 5000 se puede cambiar)
app.listen(5000, () => {
    //Imprimimos un mensaje en la terminal si todo salio bien
    console.log("Servidor ejecutandose en localhost:5000");
})

//Ejecutamos el programa
/*
nodemon index.js
 */