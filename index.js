const express = require('express');
// const bodyParser = require('body-parser');

const app = express();

app.use(express.json());

const {
  // isValidUser
  isValidDisplayName,
  isThereEmail,
  isValidEmail,
  isNotEmptyEmail,
  isTherePassword,
  isNotEmptyPassword,
  isValidPassword,
  isValidUserToSignIn,
  isValidUserToLogIn,
  isThereToken,
  isValidToken,
  isThereCategoryName,
  isTherePostTitle,
  isTherePostContent,
  isTherePostCategoryIds,
  isValidCategoryId,
  isValidPostId,
} = require('./middlewares');

// const { authMiddleware } = require('./middlewares/auth');

const { postUserController } = require('./controllers/postUserController');
const { loginController } = require('./controllers/loginController');
const { getUsersController } = require('./controllers/getUsersController');
const { getUserByIdController } = require('./controllers/getUserByIdController');
const { postCategoriesController } = require('./controllers/postCategoriesController');
const { getCategoriesController } = require('./controllers/getCategoriesController');
const { postPostController } = require('./controllers/postPostController');
const { getPostsController } = require('./controllers/getPostsController');
const { getPostByIdController } = require('./controllers/getPostByIdController');

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.post('/user', // () => console.log('teste'));
              isValidDisplayName,
              isThereEmail,
              isNotEmptyEmail,
              isValidEmail,
              isTherePassword,
              isNotEmptyPassword,
              isValidPassword,
              isValidUserToSignIn,
              postUserController);

app.post('/login',
              isThereEmail,
              isNotEmptyEmail,
              isValidEmail,
              isTherePassword,
              isNotEmptyPassword,
              isValidPassword,
              isValidUserToLogIn,
              loginController);

app.get('/user',
              isThereToken,
              isValidToken,
              getUsersController);

app.get('/user/:id',
              isThereToken,
              isValidToken,
              getUserByIdController);

app.post('/categories',
              isThereToken,
              isValidToken,
              isThereCategoryName,
              postCategoriesController);

app.get('/categories',
              isThereToken,
              isValidToken,
              getCategoriesController);

app.post('/post',
              isTherePostTitle,
              isTherePostContent,
              isTherePostCategoryIds,
              isValidCategoryId,
              isThereToken,
              isValidToken,
              postPostController);

app.get('/post',
              isThereToken,
              isValidToken,
              getPostsController);

app.get('/post/:id',
              isThereToken,
              isValidToken,
              isValidPostId,
              getPostByIdController);

// app.put('/post/:id', putPostController);
// app.delete('/post/:id', postController);
// app.delete('/user/me', userController);
// app.delete('/post/search?q=:searchTerm', postController);

// const errorHandler = (err,req,res,next) => { ... res.status(...).json({ message: err })}
// const errorHandler = require('./middlewares/errorHandler');
// app.use(errorHandler);

app.listen(3000, () => console.log('ouvindo porta 3000!'));
