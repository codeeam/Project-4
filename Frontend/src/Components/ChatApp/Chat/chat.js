import React, { useState, useEffect } from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'
import Navbar from '../Navbar/Navbar';
import InfoBar from '../InfoBar/InfoBar'
import Input from '../Input/Input'
import Messages from '../Messages/Messages'
import TextContainer from '../TextContainer/TextContainer'
import './chat.css'

let socket;

const Chat = ({ location }) => {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')
    const [users, setUsers] = useState('')
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([])
    const ENDPOINT = 'https://react-chat-app01.herokuapp.com/'

    useEffect(() => {
        const { name, room } = queryString.parse(location.search)

        socket = io(ENDPOINT)

        setName(name)
        setRoom(room)

        socket.emit('join', { name, room }, () => {
        })

        socket.on('roomData', ({ users }) => {
            setUsers(users)
        })

        return () => {
            socket.emit('disconnect')
            socket.off()
        }
    }, [ENDPOINT, location.search])

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message])
        })
    }, [messages])

    // function to send messages
    const sendMessage = (e) => {
        e.preventDefault()

        if (message) {
            socket.emit('sendMessage', message, () => setMessage(''))
        }
    }

    return (
        <div className="Navbar">
            <Navbar />
            <div className="outContainer">
                <div className="container">
                    <InfoBar room={room}></InfoBar>
                    <Messages messages={messages} name={name}></Messages>
                    <Input message={message} setMessage={setMessage} sendMessage={sendMessage}></Input>
                </div>
                <TextContainer users={users}></TextContainer>
            </div>
        </div>
    )
}

export default Chat;