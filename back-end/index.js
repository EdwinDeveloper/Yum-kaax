/*Tareas primarias de la Aplicacion*/

const server = require('./src/server');

/*Declaramos el puerto de conexion del metodo http*/
const port = 8080;

/*Importamos la coneccion a la base de datos de mongo*/
const db = require('./src/lib/db');

server.listen(port,()=>{
    console.log("Service running on port 8080");
     db.connect()
         .then(()=> console.log("Connected to the data base"))
         .catch(()=> console.log("Error Conection (Be sure to run the mongod service)"))
});
