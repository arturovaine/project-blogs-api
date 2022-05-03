const { BlogPost } = require('../models');

const postPostController = async (req, res) => {
    try {
      const { title, content, categoryIds } = req.body;      

      const newBlogPost = await BlogPost.create({ title, content, categoryIds });

      return res.status(201).json(newBlogPost);
    } catch (err) {
      res.status(401).json({ code: 'Unauthorized', message: err.message });
    }
};

module.exports = {
  postPostController,
};