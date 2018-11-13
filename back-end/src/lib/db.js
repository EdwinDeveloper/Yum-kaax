//Impostamos mongoose
const mongoose=require('mongoose');


//Realizamos promesa para la conexion a la base de datos
const connect = () => new Promise((resolve,reject)=>{
        //Utilizamos el metodo connect de mongoose a la direccion de la base de datos
        mongoose.connect('mongodb://localhost/Yumkaax',{
            useNewUrlParser:true
        });
        /*Declaramos la variable de conexion y le asignamos el metodo
        de conexion de mongoose*/
        const db = mongoose.connection;

        /*se ejecuta el metodo on para arrancar el evento de open y se 
        ejecuta la promesa resolve si no hay ningun problema*/
        db.on('open',()=>{
            //Mensaje de aviso que no hay problema
            console.warn("Connected");
            //Regresamos la promesa
            //resolve(mongoose);
        });

        /*Se ejecuta el metodo on en caso de tener algun error regresa
         la promesa reject*/
        db.on('error',(error)=>{
            //Mensaje de error
            console.warn('Error : '+error);
            //Regresa el reject
            reject(mongoose);
        })
});

//Exportamos la variable connect con la siguinete linea
module.exports = { connect }