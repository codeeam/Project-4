const express = require('express');
const cors = require('cors');
require('dotenv').config();
//Server Chat
const socketio = require('socket.io')
const http = require('http')
//End server Chat

const mysql = require('./database');

const app = express();
app.use(cors());
app.use(express.json());

// Start chat Sevrer
const chatrouter = require('./Routers/chatRouter');

app.use(chatrouter)
const PORT = 5000;
const server = app.listen(PORT, () => console.log(`REVIEW at http://localhost:${PORT}`));
const io = socketio(server)

io.on('connection', (socket) => {
    socket.on('join', ({ name, room}, callback) => {
        // const { error, user} = addUser({id: socket.id, name, room})

        if(error){
console.log('error on connection')
            return callback(error)
        } 


        socket.emit('message', {user: 'admin', text: `${user.name} Welcome to the room: ${user.room}`})
        socket.broadcast.to(user.room).emit('message', {user: 'admin', text: `${user.name}, has joined`})

        socket.join(user.room)

        io.to(user.room).emit('roomData', { room: user.room, users: getUserInRoom(user.room) })

        callback()
    })

    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id)
        io.to(user.room).emit('message', { user: user.name, text: message})
        io.to(user.room).emit('roomData', { room: user.room, users: getUserInRoom(user.room) })
        callback()
    })

    socket.on('disconnect', () => {
        const user = removeUser(socket.id)

        if(user){
            io.to(user.room).emit('message', { user: 'admin', text: `${user.name} has left the room`})
        }
    })
})
//End Chat server

