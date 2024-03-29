module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User', {
      displayName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    { timestamps: false },
  );

  User.associate = (models) => {
    User.hasMany(models.BlogPost, {
      as: 'blogpost',
      foreignKey: 'userId',
    });
  };

  return User;
};

// users: id <-> blogposts: userId
