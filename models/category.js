module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    'Category', {
      // id: DataTypes.INTEGER,
      name: DataTypes.STRING,
    },
    {
      timestamps: false,
    },
  );

  // Category.associate = (models) => {
  //   Category.belongsTo(models.PostsCategory, {
  //     as: 'postscategory',
  //     foreignKey: 'categoryId',
  //   });
  // };

  return Category;
};
