// 2 - Sua aplicação deve ter o endpoint POST /login

// Além disso, as seguintes verificações serão feitas:
// [Será validado que é possível fazer login com sucesso]
// Se o login foi feito com sucesso o resultado retornado deverá ser conforme exibido abaixo, com um status http 200:
// return res.status(200).json({ token })

// [Será validado que não é possível fazer login sem o campo email]
// Se o login não tiver o campo "email" o resultado retornado deverá ser conforme exibido abaixo, com um status http 400:
// return res.status(400).json({ message: '"email" is required' })

// [Será validado que não é possível fazer login sem o campo password]
// Se o login não tiver o campo "password" o resultado retornado deverá ser conforme exibido abaixo, com um status http 400:
// return res.status(400).json({ message: '"password" is required' })

// [Será validado que não é possível fazer login com o campo email em branco]
// Se o login tiver o campo "email" em branco o resultado retornado deverá ser conforme exibido abaixo, com um status http 400:
// return res.status(400).json({ message: '"email" is not allowed to be empty' })

// [Será validado que não é possível fazer login com o campo password em branco]
// Se o login tiver o campo "password" em branco o resultado retornado deverá ser conforme exibido abaixo, com um status http 400:
// return res.status(400).json({ message: '"password" is not allowed to be empty' })

// [Será validado que não é possível fazer login com um usuário que não existe]
// Se o login for com usuário inexistente o resultado retornado deverá ser conforme exibido abaixo, com um status http 400:
// return res.status(400).json({ message: 'Invalid fields' })
const jwt = require('jsonwebtoken');
require('dotenv').config();

const { User } = require('../models');

const { JWT_SECRET } = process.env;

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const loginController = async (req, res) => {
    const token = req.headers.authorization;

    const { email, password } = req.body; 
    const registeredUser = await User.findOne({ where: { email, password } });

    try {
      const { email, password } = req.body;      

      const { dataValues: { id } } = await User.create({ displayName, email, password, image });
      
      const token = jwt.sign({ displayName, email, password, image, id }, JWT_SECRET, jwtConfig);

      return res.status(201).json({ token });
    } catch (err) {
      res.status(401).json({ code: 'Unauthorized', message: err.message });
    }
};

module.exports = {
  loginController,
};