require('dotenv').config();
const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const jwtOptions = {
  algorithm: 'HS256',
  expiresIn: '1h',
  subject: 'user',
};

const payload = {
  isAdmin: false,
};

const token = jwt.sign(payload, JWT_SECRET, jwtOptions);

console.log(token);
