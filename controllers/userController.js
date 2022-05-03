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

//   {
//     "id": 1,
//     "displayName": "Brett Wiltshire",
//     "email": "brett@email.com", // tem quer ser único
//     "password": "123456",
//     "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
//   }

// // Este endpoint usa o método create do Sequelize para salvar um usuário no banco.
// router.post('/', async (req, res) => {
//   try {
//     const { fullName, email } = req.body;
//     const newUser = await User.create({ fullName, email });

//     return res.status(201).json(newUser);
//   } catch (e) {
//     console.log(e.message);
//     res.status(500).json({ message: 'Algo deu errado' });
//   }
// });
