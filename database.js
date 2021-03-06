require('dotenv').config();

const mysql = require('mysql2');

const connection = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

// connection.connect((err) => {
//   if (err) {
//     console.error('MYSQL CONNECTING FAILED: ', err.stack);
//     return;
//   }
//   console.log('MYSQL CONNECTED SUCCESSFULLY AS ID: ', connection.threadId);
// });

module.exports = connection;

