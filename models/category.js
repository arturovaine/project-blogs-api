module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    'Category', {
      name: DataTypes.STRING,
    },
    { timestamps: false },
  );

  // categories: id <-> postscategories: categoryId

  // Category.associate = (models) => {
  //   Category.belongsTo(models.PostsCategory, {
  //     as: 'postscategory',
  //     foreignKey: 'categoryId',
  //   });
  // };

  return Category;
};
