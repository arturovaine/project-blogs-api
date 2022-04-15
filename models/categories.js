module.exports = (sequelize, DataTypes) =>
  sequelize.define(
    'Categories', {
      id: DataTypes.INTEGER,
      name: DataTypes.STRING,
    },
    {
      timestamps: false,
      tabelName: 'Categories',
    },
);

// {
//     "id": 18,
//     "name": "News"
// }
