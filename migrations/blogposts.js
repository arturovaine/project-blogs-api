'use strict';

// {
//     "id": 21,
//     "title": "Latest updates, August 1st",
//     "content": "The whole text for the blog post goes here in this key",
//     "userId": 14, // esse é o id que referência usuário que é o autor do post
//     "published": "2011-08-01T19:58:00.000Z",
//     "updated": "2011-08-01T19:58:51.947Z",
// }

// DATEONLY => 2022-01-17
// DATE => 2022-01-17 04:33:12

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('BlogPosts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      content: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.INTEGER
      },
      published: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      updated: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      // createdAt: {
      //   allowNull: false,
      //   type: Sequelize.DATE
      // },
      // updatedAt: {
      //   allowNull: false,
      //   type: Sequelize.DATE
      // }
    });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('BlogPosts');
  }
};
