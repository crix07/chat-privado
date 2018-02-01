'use strict'

const express = require('express');
const app = express()
const bodyParser = require('body-parser');
const path = require('path');
const server = require('http').Server(app);
const io = require('socket.io')(server)
// Middlewares
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


app.use(express.static(path.join(__dirname, '/client')))

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, '/client/index.html'))
})

var messages = [{
  id: 1,
  text: 'Bienvenido al Chat Privado Hecho con Socket.IO y NodeJS de GeeKDroiD',
  nickname: 'BOT - GeeKDroiD'
}]

io.on('connection', function(socket){
  console.log(`el cliente con IP: ${socket.handshake.address} se ha conectado...`)
  socket.emit('messages', messages)

  socket.on('add-message', function(data){
    messages.push(data);

    io.sockets.emit('messages', messages);  
  })
})


module.exports = server
