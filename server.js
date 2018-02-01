'use strict'

const server = require('./app');
const mongoose = require('mongoose');
const config = require('./config');

mongoose.Promise = global.Promise
mongoose.connect(config.dbURL)
    .then(() => {
      console.log('conexion a la base de datos realizada')
      server.listen(config.port, ()=>{
        console.log(`server corriendo en el puerto ${config.port}`)
      })
    })
    .catch((err)=> console.log(`hubo un error al conectarse a la base de datos y al server ${err}`))
