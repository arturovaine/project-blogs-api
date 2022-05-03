const { User } = require('../models');

const getUserByIdController = async (req, res) => {
  try {
      const { id } = req.params;      

      const userById = await User.findOne({ where: { id } });
      
      if (!userById) {
        return res.status(404).json({ message: 'User does not exist' });
      }

      const foundUser = userById.dataValues;

      return res.status(200).json(foundUser);
    } catch (err) {
      res.status(401).json({ code: 'Unauthorized', message: err.message });
    }
};

module.exports = {
  getUserByIdController,
};
