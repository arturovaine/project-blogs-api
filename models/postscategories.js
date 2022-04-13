module.exports = (sequelize, DataTypes) => {
  const PostsCategories = sequelize.define('PostsCategories', {
    categoryId: DataTypes.STRING,
  });
  return PostsCategories;
};

// {
//     "postId": 50,
//     "categoryId": 20
// }