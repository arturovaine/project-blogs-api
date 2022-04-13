const jwt = require('jsonwebtoken');

const isValidUser = (req, res, next) => {
    const { displayName, email, password, token } = req.body;
    // Condicionais
    if (email) {
      return res.status(400).json({ message: 'User already registered' });
  };
  next();
};

const SECRET_KEY = 'xablau';
const jwtConfig = {
  expiresIn: '15m',
  algorithm: 'HS256',
};

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token is missing' });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Authentication failed' });
  }
  next();
};

module.exports = {
  isValidUser,
  authMiddleware,
};
