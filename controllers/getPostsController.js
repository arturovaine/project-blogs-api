const { BlogPost } = require('../models');

const getPostsController = async (_req, res) => {
    try {
      const allBlogPosts = await BlogPost.findAll();
      return res.status(200).json(allBlogPosts);
    } catch (err) {
      res.status(401).json({ code: 'Unauthorized', message: err.message });
    }
};

module.exports = {
  getPostsController,
};
