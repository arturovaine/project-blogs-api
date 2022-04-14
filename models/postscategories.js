module.exports = (sequelize, DataTypes) =>
  sequelize.define(
    'PostsCategories', {
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.STRING,
  },
  {
    timestamps: false,
    tabelName: 'postscategories',
  },
);

// {
//     "postId": 50,
//     "categoryId": 20
// }
