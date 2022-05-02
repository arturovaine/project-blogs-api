const express = require('express');
// const bodyParser = require('body-parser');

const app = express();

app.use(express.json());

const {
  // isValidUser
  isValidDisplayName,
  isValidEmail,
  isValidPassword,
  isValidUser,
} = require('./middlewares');

// const { authMiddleware } = require('./middlewares/auth');

const { userController } = require('./controllers/userController');

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.post('/user', // () => console.log('teste'));
              isValidDisplayName,
              isValidEmail,
              isValidPassword,
              // Validar que não é possível cadastrar um usuário com email já existente
              isValidUser,
              userController);

// app.post('/login', loginController);
// app.get('/user', userController);
// app.get('/user/:id', userControllerId);
// app.post('/categories', categoriesController);
// app.get('/categories', categoriesController);
// app.post('/post', postController);
// app.get('/post', postController);
// app.put('/post/:id', postController);

// app.delete('/post/:id', postController);
// app.delete('/user/me', userController);
// app.delete('/post/search?q=:searchTerm', postController);

// const errorHandler = (err,req,res,next) => { ... res.status(...).json({ message: err })}
// const errorHandler = require('./middlewares/errorHandler');
// app.use(errorHandler);

app.listen(3000, () => console.log('ouvindo porta 3000!'));
