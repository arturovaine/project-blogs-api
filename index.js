const express = require('express');
// const bodyParser = require('body-parser');

const app = express();

app.use(express.json());

const { isValidUser } = require('./middlewares');
const userController = require('./controllers/userController');

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

//
// 1 - Sua aplicação deve ter o endpoint POST /user
// 2 - Sua aplicação deve ter o endpoint POST /login
// 3 - Sua aplicação deve ter o endpoint GET /user
// 4 - Sua aplicação deve ter o endpoint GET /user/:id
// 5 - Sua aplicação deve ter o endpoint POST /categories
// 6 - Sua aplicação deve ter o endpoint GET /categories
// 7 - Sua aplicação deve ter o endpoint POST /post
// 8 - Sua aplicação deve ter o endpoint GET /post
// 9 - Sua aplicação deve ter o endpoint GET post/:id
// 10 - Sua aplicação deve ter o endpoint PUT /post/:id
// Requisitos Bônus
// 11 - Sua aplicação deve ter o endpoint DELETE post/:id
// 12 - Sua aplicação deve ter o endpoint DELETE /user/me
// 13 - Sua aplicação deve ter o endpoint GET post/search?q=:searchTerm

// users
// categories
// posts

// https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status
// Respostas de informação (100-199),
// Respostas de sucesso (200-299),
// Redirecionamentos (300-399)
// Erros do cliente (400-499)
// Erros do servidor (500-599)

app.post('/user', isValidUser, userController);

// app.post('/login', loginController);
// app.get('/user', userController);
// app.get('/user/:id', userController);
// app.post('/categories', categoriesController);
// app.get('/categories', categoriesController);
// app.post('/post', postController);
// app.get('/post', postController);
// app.put('/post/:id', postController);

// app.delete('/post/:id', postController);
// app.delete('/user/me', userController);
// app.delete('/post/search?q=:searchTerm', postController);

//

app.listen(3000, () => console.log('ouvindo porta 3000!'));
