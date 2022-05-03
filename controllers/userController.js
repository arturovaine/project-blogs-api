const jwt = require('jsonwebtoken');
require('dotenv').config();

const { User } = require('../models');

const { JWT_SECRET } = process.env;

const jwtConfig = {
  expiresIn: '1000h',
  algorithm: 'HS256',
};

const userController = async (req, res) => {
    try {
      const { displayName, email, password, image } = req.body;      

      const { dataValues: { id } } = await User.create({ displayName, email, password, image });
      
      const token = jwt.sign({ displayName, email, password, image, id }, JWT_SECRET, jwtConfig);

      return res.status(201).json({ token });
    } catch (err) {
      res.status(401).json({ code: 'Unauthorized', message: err.message });
    }
};

module.exports = {
  userController,
};
