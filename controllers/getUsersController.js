const { User } = require('../models');

const getUsersController = async (_req, res) => {
  try {
    const allUsers = await User.findAll();
    return res.status(200).json(allUsers);
  } catch (err) {
    res.status(401).json({ code: 'Unauthorized', message: err.message });
  }
};

module.exports = {
  getUsersController,
};
