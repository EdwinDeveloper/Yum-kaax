const server=require('./src/server');

const db = require('./src/lib/db');

server.listen(8080,()=>{
    console.log("I am running on port 8080");
    db.connect()
        .then((dato)=> {console.log(dato)})
        .catch((error)=> {console.log("Error : "+error)})
});