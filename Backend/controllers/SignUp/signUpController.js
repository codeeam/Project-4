const bcrypt = require('bcrypt');
const db = require("./../../database");

exports.register = (req, res) =>
{
  const username = req.body.username;
  const password = req.body.password;

  bcrypt.hash(password, Number(process.env.SALT), (err, hash) =>
  {
    db.query('INSERT INTO user (username, password) VALUES (?,?)', [username, hash], (err, result) =>
    {
      if (err) {
        console.log(err);
      }
  });
    
  })
}