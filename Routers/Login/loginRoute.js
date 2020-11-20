const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');
const { isAuth, isLoggedIn, login } = require('./../../controllers/Login/loginController');
require("dotenv").config();

const verifyJWT = (req, res, next) =>
{
    const token = req.headers['x-access-token'];
    if (!token) {
        res.send('we need a token');
    } else {
        jwt.verify(token, process.env.jwtSecret , (err, decoded) =>
        {
            if (err) {
                res.json({ auth: false, message: "you failed to auth" });
            } else {
                req.userId = decoded.id;
                next();
            }
        });
    }
};

router.get('/isUserAuth', verifyJWT, isAuth)
router.get('/login', isLoggedIn)
router.post('/login', login);

module.exports = router;