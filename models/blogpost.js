module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define(
    'BlogPost', {
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      published: DataTypes.DATE,
      updated: DataTypes.DATE,
    },
    { timestamps: false },
  );

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, {
      as: 'user',
      foreignKey: 'userId',
    });
  };

return BlogPost;
};

// blogposts: id <-> postscategories: postId
// blogposts: userId <-> user: id
