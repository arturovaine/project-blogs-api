const PostsCategory = (sequelize, DataTypes) =>
  sequelize.define(
    'PostsCategory', {
      // postId: DataTypes.INTEGER,
      // categoryId: DataTypes.STRING,
    },
    {
      timestamps: false,
      tabelName: 'PostsCategories',
    },
);

module.exports = PostsCategory;

// {
//     "postId": 50,
//     "categoryId": 20
// }
