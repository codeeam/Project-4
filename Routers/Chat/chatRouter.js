const express = require('express');
const chatrouter = express.Router()

chatrouter.get("/", (req, res)=>{
    res.send({response: "Chat Server is up and Running"}).status(200)})
    module.exports = chatrouter