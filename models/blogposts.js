module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.STRING,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  });
  return BlogPost;
};

// {
//     "id": 21,
//     "title": "Latest updates, August 1st",
//     "content": "The whole text for the blog post goes here in this key",
//     "userId": 14, // esse é o id que referência usuário que é o autor do post
//     "published": "2011-08-01T19:58:00.000Z",
//     "updated": "2011-08-01T19:58:51.947Z",
// }
