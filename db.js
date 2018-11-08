const mongoose = require('mongoose')

const connect = () =>  new Promise((resolve, reject) => {
    mongoose.connect('mongodb://localhost/YumKaax')
    const db = mongoose.connection

    db.on('open', () => {
      console.warn('Hola Usuarios')
      resolve(mongoose)
    })

    db.on('error', (error) => {
      console.error('error : ', error)
      reject(error)
    })
  })

module.exports = { connect }