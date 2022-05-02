// 2 - Sua aplicação deve ter o endpoint POST /login

// Além disso, as seguintes verificações serão feitas:
// [Será validado que é possível fazer login com sucesso]
// Se o login foi feito com sucesso o resultado retornado deverá ser conforme exibido abaixo, com um status http 200:
// return res.status(200).json({ token })

// [Será validado que não é possível fazer login com um usuário que não existe]
// Se o login for com usuário inexistente o resultado retornado deverá ser conforme exibido abaixo, com um status http 400:
// return res.status(400).json({ message: 'Invalid fields' })

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
