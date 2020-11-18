const bcrypt = require('bcrypt');
const db = require('./../../database');
const jwt = require('jsonwebtoken');

exports.isAuth = (req, res) =>
{
  res.send('you are authenticated congrats!')
}

exports.isLoggedIn = (req, res) =>
{
  if (req.session.user) {
    res.send({loggedIn: true, user: req.session.user})
  } else {
    res.send({loggedIn: false})
  }
};


exports.login = (req, res) =>
{
  const username = req.body.username;
  const password = req.body.password;

  db.query('SELECT * FROM users WHERE username = ?', [username], (err, result) =>
  {
    if (err) {
      res.send({ err: err });
    } 
    if (result.length > 0) {
      bcrypt.compare(password, result[0].password, (err, response) =>
      {
        if (response) {
         
          const id = result[0].id;
          const token = jwt.sign({ id }, "jwtSecret", {
            expiresIn: 300,
          });
          req.session.user = result;
          res.json({ auth: true, token: token, result: result[0].username });
        } else {
          res.send({ auth: false, message: 'Wrong username/password combination!' });
        }
      });
    } else {
      res.send({auth: false, message: 'User does not exists'})
    }  
  });
}