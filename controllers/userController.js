const jwt = require('jsonwebtoken');
require('dotenv').config();

const { User } = require('../models');

const { JWT_SECRET } = process.env;

// const jwtConfig = {
//   expiresIn: '7d',
//   algorithm: 'HS256',
// };

const userController = async (req, res) => {
    const token = req.headers.authorization;

    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      const { displayName, email, password, image } = req.body;

      await User.create({ displayName, email, password, image });

      console.log('decoded:', decoded);

      return res.status(201).json({ decoded });
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
