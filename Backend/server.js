const express = require('express');
const cors = require('cors');
require('dotenv').config();

const mysql = require('./database');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;
app.listen(PORT, () => console.log(`REVIEW at http://localhost:${PORT}`));
