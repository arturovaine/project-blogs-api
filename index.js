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
} = require('./middlewares');

// const { authMiddleware } = require('./middlewares/auth');

const { userController } = require('./controllers/userController');
const { loginController } = require('./controllers/loginController');

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

// [Será validado que não é possível fazer login sem o campo email]
// Se o login não tiver o campo "email" o resultado retornado deverá ser conforme exibido abaixo, com um status http 400:
// return res.status(400).json({ message: '"email" is required' })

// [Será validado que não é possível fazer login sem o campo password]
// Se o login não tiver o campo "password" o resultado retornado deverá ser conforme exibido abaixo, com um status http 400:
// return res.status(400).json({ message: '"password" is required' })

// [Será validado que não é possível fazer login com o campo email em branco]
// Se o login tiver o campo "email" em branco o resultado retornado deverá ser conforme exibido abaixo, com um status http 400:
// return res.status(400).json({ message: '"email" is not allowed to be empty' })

// [Será validado que não é possível fazer login com o campo password em branco]
// Se o login tiver o campo "password" em branco o resultado retornado deverá ser conforme exibido abaixo, com um status http 400:
// return res.status(400).json({ message: '"password" is not allowed to be empty' })

// [Será validado que não é possível fazer login com um usuário que não existe]
// Se o login for com usuário inexistente o resultado retornado deverá ser conforme exibido abaixo, com um status http 400:
// return res.status(400).json({ message: 'Invalid fields' })

app.post('/user', // () => console.log('teste'));
              isValidDisplayName,
              isThereEmail,
              isNotEmptyEmail,
              isValidEmail,
              isTherePassword,
              isNotEmptyPassword,
              isValidPassword,
              // Validar que não é possível cadastrar um usuário com email já existente
              isValidUserToSignIn,
              userController);

app.post('/login', // () => console.log('teste'));
              isThereEmail,
              isNotEmptyEmail,
              isValidEmail,
              isTherePassword,
              isNotEmptyPassword,
              isValidPassword,
              isValidUserToLogIn,
              loginController);

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
