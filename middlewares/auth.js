// const jwt = require('jsonwebtoken');
require('dotenv').config();

// const { JWT_SECRET } = process.env;

// const jwtConfig = {
//   expiresIn: '7d',
//   algorithm: 'HS256',
// };

const authMiddleware = async (req, _res, next) => {
  // const { displayName, email, password, image } = req.body;
  
    // const token = jwt.verify({ displayName, email, password, image }, JWT_SECRET, jwtConfig);

    // console.log(token);
  
    next();

    // return token;
};

module.exports = {
  authMiddleware,
};
