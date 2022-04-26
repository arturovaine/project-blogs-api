const { User } = require('../models');

const getAllUsers = async () => user.findAllClean();

const login = async (username, password) => {
  const user = await User.findOne({ where: { username }});

  if (!user) {
    const err = new Error();
    err.code = 'INVALID_USER';
    err.message = 'User not found';
    throw err;
  }

  const payload = {
    username,
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET);

  return token;
};

module.exports = {
  getAllUsers,
  login,
};
