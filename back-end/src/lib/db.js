//Importamos el modulo de mongoose
const mongoose = require('mongoose')

//Declaramos una funcion que nos retorna una promesa
const connect = () =>  new Promise((resolve, reject) => {
    /*Utilizamos el metodo de mongoose connect y le pasamos
    nuestra ruta de la base de datos*/
    mongoose.connect('mongodb://localhost/Yumkaax', {
      /*Le asignamos a la variable useNewUrlParser el valor de tru
      para evitar error por default en consola*/
      useNewUrlParser: true
    })
    /*Asignamos mongoose.conection a la constante db*/
    const db = mongoose.connection

    /*Ejecutamos el metodo on y dentro abrimos la conexion, despues
    le pasamos un callback*/
    db.on('open', () => {
      /*Mandamos desde el console que la conexion fue exitosa */
      console.warn('connection open')
      /*Devolvemos la promesa */
      resolve(mongoose)
    })

    /*Si tenemos algun error regresamos la promesa de reject para verificar que
    tuvimos un error */
    db.on('error', (error) => {
      /*Avisamos por consola que no pudimos conextar y mostramos el error */
      console.error('NO SE PUDO CONECTAR: ', error)
      /*Devolvemos la promesa reject */
      reject(error)
    })
  })

  /*Exportamos la funcion connect */
module.exports = {
  connect
}
