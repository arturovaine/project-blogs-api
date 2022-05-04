const { BlogPost, PostsCategory } = require('../models');

const postPostController = async (req, res) => {
    try {
      const { title, categoryIds, content } = req.body;

      const newBlogPost = await BlogPost.create({ title, content, userId: req.userId });

      categoryIds.forEach(
        async (categoryId) => PostsCategory.create(
          { postId: newBlogPost.dataValues.id, categoryId },
          ),
      );

      return res.status(201).json(newBlogPost);
    } catch (err) {
      res.status(401).json({ code: 'Unauthorized', message: err.message });
    }
};

module.exports = {
  postPostController,
};
