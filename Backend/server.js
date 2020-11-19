const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
require('dotenv').config();
//Server Chat
const socketio = require('socket.io')
//End server Chat

const loginRouter = require('./Routers/Login/loginRoute');
const signUpRouter = require('./Routers/SignUp/signUpRoute');
const postRouters = require('./Routers/Post/RouterPost')
const routerLike = require('./Routers/Post/RouterLike');
const contactRouter =require('./Routers/Contact/ContactRouter')

const mysql = require('./database');

const app = express();
app.use(express.json());
app.use(cors({
  origin: ["http://localhost:3001"],
  methods: ['GET', 'POST'],
  credentials: true
}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(session({
  key: process.env.sessionKey,
  secret: process.env.sessionSrcret,
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: 60*60*24,
  }
}))
app.use(loginRouter);
app.use(signUpRouter);
app.use(postRouters);
app.use(routerLike)
app.use(contactRouter)

// Start chat Sevrer
const chatrouter = require('./Routers/Chat/chatRouter');

app.use(chatrouter)
const PORT = process.env.PORT;
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

