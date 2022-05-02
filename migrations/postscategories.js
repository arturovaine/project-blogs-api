// 'use strict';

// // {
// //     "postId": 50,
// //     "categoryId": 20
// // }

// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     await queryInterface.createTable('PostsCategories', {
//       postId: {
//         allowNull: false,
//         autoIncrement: true,
//         primaryKey: true,
//         type: Sequelize.INTEGER
//       },
//       categoryId: {
//         type: Sequelize.STRING
//       },
//       // createdAt: {
//       //   allowNull: false,
//       //   type: Sequelize.DATE
//       // },
//       // updatedAt: {
//       //   allowNull: false,
//       //   type: Sequelize.DATE
//       // }
//     });
//   },
//   down: async (queryInterface, _Sequelize) => {
//     await queryInterface.dropTable('PostsCategories');
//   }
// };
