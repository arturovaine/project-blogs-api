const { BlogPost } = require('../models');

const getPostByIdController = async (req, res) => {
  try {
      const { id } = req.params;

      const postById = await BlogPost.findAll({ where: { id } });
      
      if (!postById) {
        return res.status(404).json({ message: 'Post does not exist' });
      }

      const foundPost = postById.dataValues;

      return res.status(200).json(foundPost);
    } catch (err) {
      res.status(401).json({ code: 'Unauthorized', message: err.message });
    }
};

module.exports = {
  getPostByIdController,
};
