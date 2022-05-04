module.exports = (sequelize, DataTypes) => {
  const PostsCategory = sequelize.define(
    'PostsCategory', {
      postId: { type: DataTypes.INTEGER, foreignKey: true },
      categoryId: { type: DataTypes.INTEGER, foreignKey: true },
    },
    {
      timestamps: false,
    },
  );

//   PostsCategory.associate = (models) => {
//     models.PostsCategory.belongsToMany(
//       models.PostsCategory, { as: 'postscategory', through: 'postscategory', foreignKey: 'postId', otherKey: 'id' },
//     );
//     models.Blogpost.hasMany(
//       models.Category, { as: 'category', through: '', foreignKey: 'categoryId', otherKey: 'id' },
//     );
//   };

  return PostsCategory;
};
