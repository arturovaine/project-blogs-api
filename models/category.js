const Category = (sequelize, DataTypes) =>
  sequelize.define(
    'Category', {
      id: DataTypes.INTEGER,
      name: DataTypes.STRING,
    },
    {
      timestamps: false,
      tabelName: 'Categories',
    },
);

module.exports = Category;

// {
//     "id": 18,
//     "name": "News"
// }
