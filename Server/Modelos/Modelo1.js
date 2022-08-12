const {Schema, model} = require('mongoose');
//Se importan Schema y model de mongoose que son necesarios para la creacion del modelo
//Un modelo en mongoose es la estructura de como se van a guardar los datos en la bd
//Es equivalente a una tabla en mySql pero sigue una sintaxis diferente para su creacion

const newSchema = new Schema({
    //Primero se le asigna una llave en este caso nombre
    nombre:{  
        type: String, //Se le asigna el tipo de dato que va a ser, en este caso String
        unique:true //Como no existen las llaves primarias podemos indicar que solo puede existir un registro con un nombre unico
    }
    ,
    edad:{
        type: Number,
        require: true //Se require este campo en cada registro
    },
})
const modelo = model("Modelo1", newSchema); //Se crea el modelo
module.exports = modelo;// se exporta a los Controles