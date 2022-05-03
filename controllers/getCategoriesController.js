const { Category } = require('../models');

const getCategoriesController = async (_req, res) => {
    try {
      const allCategories = await Category.findAll();
      return res.status(200).json(allCategories);
    } catch (err) {
      res.status(401).json({ code: 'Unauthorized', message: err.message });
    }
};

module.exports = {
  getCategoriesController,
};
