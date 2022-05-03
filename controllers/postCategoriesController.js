const { Category } = require('../models');

const postCategoriesController = async (req, res) => {
    try {
      const { name } = req.body;

      const category = await Category.create({ name });

      return res.status(201).json(category);
    } catch (err) {
      res.status(401).json({ code: 'Unauthorized', message: err.message });
    }
};

module.exports = {
  postCategoriesController,
};
