/*Declaramos una variable e importamos la entidad de express*/
const express=require('express');
const app=express();
const { routerUsers } = require('./routes/users');
const  routerCrops  = require('./routes/crops').routerCrops;
const { routerPlants } = require('./routes/plants');
const routerMachines = require('./routes/machines').routerMachines;
const routerAuth = require('./routes/auth').routerAuth;
const cors=require('cors');
/*Asignamos el valor del metodo de express en una variable (app)*/
console.log(routerPlants.route);
app.use(express.json());
app.use(cors());
app.use('/auth',routerAuth);
app.use('/users',routerUsers);
app.use('/crops',routerCrops);
app.use('/plants',routerPlants);
app.use('/machines',routerMachines);

//const users = require('./useCases/users');
/*Habilitamos la ruta de la raiz de nuestra API*/

app.get('/',(req,res)=>{
    res.json({
        success:true,
        message:"API running YumKaax"
    });
});

/*Exportamos la variable app*/
module.exports = app;