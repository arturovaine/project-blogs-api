const { BlogPost, User, PostsCategory, Category } = require('../models');

// blogpost -> id, title, content, userId, published, updated
// user -> id, displayName, email, image
// categories -> id, name

// postcategory -> postId, categoryId
// categories -> id, name

const getPostsController = async (_req, res) => {
    try {
      const allBlogPosts = await BlogPost.findAll();
      const user = await User.findOne({ where: { id: allBlogPosts[0].dataValues.id } });
      const categories = await PostsCategory.findAll({ where: { postId: allBlogPosts[0].dataValues.id }, attributes: ['categoryId'] });

      allBlogPosts[0].dataValues.user = user.dataValues;
      allBlogPosts[0].dataValues.categories = [];
      allBlogPosts[0].dataValues.categories.id = categories[0].dataValues.categoryId;

      const categoryName = await Category.findAll({ where: { id: allBlogPosts[0].dataValues.categories.id }, attributes: ['id', 'name'] });
      allBlogPosts[0].dataValues.categories.name = categoryName[0].dataValues.name;
      console.log('--->', allBlogPosts[0].dataValues);
      return res.status(200).json(allBlogPosts[0].dataValues);
    } catch (err) { res.status(401).json({ code: 'Unauthorized', message: err.message }); }
};

module.exports = {
  getPostsController,
};
