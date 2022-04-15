const { users } = require('../models');

const getAllUsers = async () => users.findAllClean();

module.exports = {
  getAllUsers,
};
