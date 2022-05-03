const jwt = require('jsonwebtoken');
require('dotenv').config();

const { JWT_SECRET } = process.env;

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const { User } = require('../models');

const loginController = async (req, res) => {
    const { email, password } = req.body; 

    try {
        const registeredUser = await User.findOne({ where: { email, password } });

        if (registeredUser) {
            const token = jwt.sign({ email, password }, JWT_SECRET, jwtConfig);
            return res.status(200).json({ token });
    }
      } catch (err) {
        res.status(401).json({ code: 'Error', message: err.message });
      }
};

module.exports = {
  loginController,
};
