const express = require('express');
//Como vamos a hacer uso de rutas necesitamos crear esta constante
const route = express.Router();
//Importamos las funciones del controlador
const {CrearNuevoRegistro, EliminarRegistro, ActualizarRegistro, ObtenerRegistros} = require('../Controles/Modelo1Control');


/*
para llamar a las rutas podemos hacerlo de varias maneras pero para simplificar vamos a usar dos. El metodo get y post
usualmente cuando se usa get no necesitamos mandar datos solo se llama para obtener datos del servidor mientras que post si
require de datos para crear procesos en el servidor

route.get 
route.post
*/

/************************************************************************************************ */
//para este ejemplo creamos la ruta CrearRegistro
route.post("/CrearRegistro",(req,res) =>{
    //Obtenemos los datos que nos llegan del cliente
    let nombre = req.body.nombre;
    let edad = req.body.edad;
    //Si los datos tienen datos podemos crear el registro
    if(nombre && edad)
    {
       CrearNuevoRegistro(nombre, edad) //Esta funcion viene de los controlles y le pasamos como parametro nombre  y edad
       .then((data) => {
        //Si todo sale bien y se creo el registro se va a mostrar en consola
         console.log("registro creado");
         console.log(data);
         res.status(200).send("regsistro creado");
       })
       .catch((err) => {
        //Si hay un error nos lo mostrara en consola
        console.log("error al crear registro");
        console.log(err);
       })
    }else //si las variables no tienen datos mandamos al cliente un error 400 y un mensaje
    {
        console.log("faltaron datos por llegar a la ruta crear registro")
        res.status(400).send("Faltaron datos por mandar a la ruta /CrearUsuario");
    }

    //TODO: Podemos ver esta ruta en funcionamiento entrando al archivo Peticiones.rest EJEMPLO 1
    //TODO:Para esto sera necesario instalar la extension rest que nos permite simular las peticiones

})
/************************************************************************************************ */
/************************************************************************************************ */
//Ruta creada para actualizar la edad de un registro en especifico
route.post("/ActualizarRegistro",(req,res) =>{
  //Obtenemos los datos que nos llegan del cliente
  let nombre = req.body.nombre;
  let edad = req.body.edad;
  //Si los datos tienen datos podemos crear el registro
  if(nombre && edad)
  {
    ActualizarRegistro(nombre, edad) //Esta funcion viene de los controlles y le pasamos como parametro nombre  y edad
     .then((data) => {
      //Si todo sale bien y se creo el registro se va a mostrar en consola
       console.log("registro actualizado");
       console.log(data);
       res.status(200).send("regsistro actualizado");
     })
     .catch((err) => {
      //Si hay un error nos lo mostrara en consola
      console.log("error al actualizar registro");
      console.log(err);
     })
  }else //si las variables no tienen datos mandamos al cliente un error 400 y un mensaje
  {
      console.log("faltaron datos por llegar a la ruta actualizar registro")
      res.status(400).send("Faltaron datos por mandar a la ruta /ActualizarRegistro");
  }
})
/************************************************************************************************ */
/************************************************************************************************ */
//Ruta creada para eliminar un registro de la base de datos
route.post("/EliminarRegistro",(req,res) =>{
  //Obtenemos los datos que nos llegan del cliente
  let nombre = req.body.nombre;
  //Si los datos tienen datos podemos crear el registro
  if(nombre )
  {
    EliminarRegistro(nombre) //Esta funcion viene de los controlles y le pasamos como parametro nombre  y edad
     .then((data) => {
      //Si todo sale bien y se creo el registro se va a mostrar en consola
       console.log("registro eliminado");
       console.log(data);
       res.status(200).send("regsistro eliminado");
     })
     .catch((err) => {
      //Si hay un error nos lo mostrara en consola
      console.log("error al eliminar registro");
      console.log(err);
     })
  }else //si las variables no tienen datos mandamos al cliente un error 400 y un mensaje
  {
      console.log("faltaron datos por llegar a la ruta eliminar registro")
      res.status(400).send("Faltaron datos por mandar a la ruta /EliminarRegistro");
  }
})
/************************************************************************************************ */
/************************************************************************************************ */
//Ruta para obtener los registros existentes que existen 

route.get("/ObtenerRegistros",(req,res) =>{
  //Como esta ruta es de tipo get no es necesario que yo recibir nada
    ObtenerRegistros() //Esta funcion viene de los controlles y le pasamos como parametro nombre  y edad
     .then((data) => {
      //Si todo sale bien y se creo el registro se va a mostrar en consola
       console.log("mandando registros");
       console.log(data);
       res.status(200).send(data);
     })
     .catch((err) => {
      //Si hay un error nos lo mostrara en consola
      console.log("error al mandar registros");
      console.log(err);
     })
})
/************************************************************************************************ */
module.exports = route;