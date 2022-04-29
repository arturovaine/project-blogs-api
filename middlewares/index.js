// const jwt = require('jsonwebtoken');

// const isValidUser = (req, res, next) => {
//     const { displayName, email, password, token } = req.body;
//     // Condicionais
//     if (email) {
//       return res.status(400).json({ message: 'User already registered' });
//   };
//   next();
// };

// const SECRET_KEY = 'xablau';
// const jwtConfig = {
//   expiresIn: '15m',
//   algorithm: 'HS256',
// };

// const authMiddleware = (req, res, next) => {
//   const token = req.headers.authorization;

//   if (!token) {
//     return res.status(401).json({ message: 'Token is missing' });
//   }

//   try {
//     const decoded = jwt.verify(token, SECRET_KEY);
//     next();
//   } catch (err) {
//     return res.status(401).json({ message: 'Authentication failed' });
//   }
//   next();
// };
//

// O campo displayName deverá ser uma string com no mínimo de 8 caracteres;
// return res.status(400).json({ message: "\"displayName\" length must be at least 8 characters long" });

const isValidDisplayName = (req, res, next) => {
  const { displayName } = req.body;
  if (displayName.length < 8) {
    return res.status(400).json({
      message: '"displayName" length must be at least 8 characters long',
    });
  }
  next();
};

// O campo email será considerado válido se tiver o formato <prefixo>@<domínio> e se for único. Ele é obrigatório.
// return res.status(400).json({ message: "\"email\" must be a valid email" });
// return res.status(400).json({ message: "\"email\" is required" });

const isValidEmail = (req, res, next) => {
  const { email } = req.body;
  // const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
  const regex = /\S+@\S+\.\S+/;
  if (!email) {
    return res.status(400).json({
      message: '"email" is required',
    });
  }
  if (!email.match(regex)) {
    return res.status(400).json({
      message: '"email" must be a valid email',
    });
  }
  next();
};

// A senha deverá conter 6 caracteres. Ela é obrigatória.
// return res.status(400).json({ message: "\"password\" is required" });
// return res.status(400).json({ message: "\"password\" length must be 6 characters long" });

const isValidPassword = (req, res, next) => {
  const { password } = req.body;

  if (!password) {
    return res.status(400).json({
      message: '"password" is required',
    });
  }
  if (password.length !== 6) {
    return res.status(400).json({
      message: '"password" length must be 6 characters long',
    });
  }
  next();
};

// Caso exista uma pessoa com o mesmo email na base, deve-se retornar o seguinte erro:
// return res.status(409).json({ message: "User already registered" });

module.exports = {
  // isValidUser,
  // authMiddleware,
  isValidDisplayName,
  isValidEmail,
  isValidPassword,
};
