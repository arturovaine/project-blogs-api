module.exports = (sequelize, DataTypes) =>
  sequelize.define(
    'Category', {
      id: DataTypes.INTEGER,
      name: DataTypes.STRING,
  },
  {
    timestamps: false,
    tabelName: 'categories',
  },
);

// {
//     "id": 18,
//     "name": "News"
// }
