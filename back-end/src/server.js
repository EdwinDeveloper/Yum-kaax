/*Declaramos una variable e importamos la entidad de express*/
const express=require('express');
const app=express();
const { routerUsers } = require('./routes/users');
const  routerCrops  = require('./routes/crops').routerCrops;
/*Asignamos el valor del metodo de express en una variable (app)*/


app.use(express.json());
app.use('/users',routerUsers);
app.use('/crops',routerCrops);
//const users = require('./useCases/users');
/*Habilitamos la ruta de la raiz de nuestra API*/

/*Exportamos la variable app*/
module.exports = app;