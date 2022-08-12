//Se require instalar mongoose para este paso
const mongoose = require('mongoose');

//Creamos la funcion para la conexion a la base de datos
function _connectDB() {
    //Para poder conectar a localhost es necesario seguir los pasos de instalacion de mongoose en la computadora en donde se esta programando 
    //https://platzi.com/blog/como-instalar-mongodb-en-window-linux-y-mac/#:~:text=Para%20descargar%20la%20versi%C3%B3n%20de,proceder%20a%20la%20instalaci%C3%B3n%20asistida.
    const URI = `mongodb://localhost:27017/Plantilla`;
    mongoose.connect(URI, function (err, db) {
        if (err) throw err;
    })
    var connection = mongoose.connection;

    connection.on('connected', () => {
        console.log("connection done!");
    });
    connection.on('disconnected', () => {
        console.log("disconnected database");
    });
    connection.on("error", () => {
        console.log("error connection database");
    })
}

//Exportamos la funcion
module.exports = _connectDB;
