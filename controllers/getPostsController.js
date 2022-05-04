const { BlogPost, User, Category } = require('../models');

const getPostsController = async (_req, res) => {
    try {
      const allBlogPosts = await BlogPost.findAll({
        attributes: ['id', 'title', 'content', 'userId', 'published', 'updated'],
        include: [
          { model: User, as: 'user', attributes: ['id', 'displayName', 'email', 'image'] },
          { model: Category, as: 'categories', attributes: ['id', 'name'] },
        ],
      });

      console.log('--->', allBlogPosts);
      return res.status(200).json(allBlogPosts);
    } catch (err) { res.status(401).json({ code: 'Unauthorized', message: err.message }); }
};

module.exports = {
  getPostsController,
};
