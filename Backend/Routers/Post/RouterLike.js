const express = require('express');
const RoutersLike = express.Router()
const db = require('../../database');

RoutersLike.post('/Languages/English/api/like', (req, res) => {

    const userLikeing = req.body.userLikeing
    const postid = req.body.postid

    db.query('INSERT INTO likes  (userLikeing, postid) VALUES (?,?) ', [userLikeing, postid], (err, result) => {
        if (err) {
            console.log(err)
        }
        db.query("UPDATE posts SET likes = likes + 1 WHERE id = ?",
            postid,
            (err2, result2) => {
                res.send(result)
            })
    })

})

module.exports = RoutersLike;