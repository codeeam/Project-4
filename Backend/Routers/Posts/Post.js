const express = require('express');
const Routers = express.Router()
const db = require('../../database');


Routers.get('/Languages/English/api/get', (req, res) => {
    db.query('SELECT * FROM posts',  (err, result) => {
        res.send(result)
    })
})



    Routers.post("/Languages/English/api/insert", (req, res) => {

        const rb = req.body.rb


        db.query('INSERT INTO posts (rb) VALUES (?)', [rb], (err, result) => {
            console.log(result)
            //    console.log(err) 
            
        })
    })


    module.exports = Routers