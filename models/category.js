module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    'Category', {
      name: DataTypes.STRING,
    },
    { timestamps: false },
  );

  return Category;
};

// categories: id <-> postscategories: categoryId
