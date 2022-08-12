//Es necesario importar el modelo con el cual se va a estar trabajando y cada modelo tiene un controlador
//Un control es un archivo donde realizaremos todas las acciones para manipular el modelo, dicho de otra forma dar una estructura para poder manipular los datos
const Modelo = require('../Modelos/Modelo1');

//Funcion para crear un nuevo registro
function CrearNuevoRegistro(nombre, edad)
{
    const nuevoRegistro = new Modelo({
        nombre,
        edad
    })
    return nuevoRegistro.save();
}

//Funcion para obtener todos los registros
function ObtenerRegistros()
{
    return Modelo.find();
}

//Funcion para eliminar registro se busca por medio del nombre
function EliminarRegistro(nombre)
{
    return Modelo.findOneAndDelete({nombre});
}

//Actualiza un registro, se busca por el nombre y se actualiza solo la edad
function ActualizarRegistro(nombre, edad)
{
    return Modelo.findOneAndUpdate({nombre:nombre},{
        edad:edad //Como los dos campos se llaman igual podemos poner solo uno como
        //edad
    })
}

//Se exportan las funciones que creamos hacia rutas
module.exports = {CrearNuevoRegistro, ObtenerRegistros, EliminarRegistro,ActualizarRegistro};