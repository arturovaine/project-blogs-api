const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const jwtConfig = { algorithms: ['HS256'] };

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;

  try {
    // const payload = jwt.verify(token, JWT_SECRET_KEY, jwtConfig);
    // const { username } = jwt.verify(token, JWT_SECRET_KEY, jwtConfig);

    const decoded = jwt.verify(token, JWT_SECRET);

    console.log(decoded);

    next();
  } catch (err) {
    res.status(401).json({ code: 'Unauthorized', message: err.message });
  }
};

module.exports = {
  authMiddleware,
};
