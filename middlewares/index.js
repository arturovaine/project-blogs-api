const jwt = require('jsonwebtoken');
require('dotenv').config();

const { JWT_SECRET } = process.env;

const { User, Category } = require('../models');

const isValidDisplayName = (req, res, next) => {
  const { displayName } = req.body;
  if (displayName.length < 8) {
    return res.status(400).json({
      message: '"displayName" length must be at least 8 characters long',
    });
  }
  next();
};

const isThereEmail = (req, res, next) => {
  const { email } = req.body;
  if (email === undefined) {
    return res.status(400).json({
      message: '"email" is required',
    });
  }
  next();
};

const isNotEmptyEmail = (req, res, next) => {
  const { email } = req.body;
  if (email === '') {
    return res.status(400).json({
      message: '"email" is not allowed to be empty',
    });
  }
  next();
};

const isValidEmail = (req, res, next) => {
  const { email } = req.body;
  const regex = /\S+@\S+\.\S+/;
  if (!email.match(regex)) {
    return res.status(400).json({
      message: '"email" must be a valid email',
    });
  }
  next();
};

const isTherePassword = (req, res, next) => {
  const { password } = req.body;

  if (password === undefined) {
    return res.status(400).json({
      message: '"password" is required',
    });
  }
  next();
};

const isNotEmptyPassword = (req, res, next) => {
  const { password } = req.body;

  if (password === '') {
    return res.status(400).json({
      message: '"password" is not allowed to be empty',
    });
  }
  next();
};

const isValidPassword = (req, res, next) => {
  const { password } = req.body;

  if (password.length !== 6) {
    return res.status(400).json({
      message: '"password" length must be 6 characters long',
    });
  }
  next();
};

const isValidUserToSignIn = async (req, res, next) => {
  const { email } = req.body; 
  const userToBeRegistered = await User.findOne({ where: { email } });
  if (userToBeRegistered) {
    return res.status(409).json({ message: 'User already registered' });
  }
  next();
};

const isValidUserToLogIn = async (req, res, next) => {
  const { email } = req.body; 
  const registeredUser = await User.findOne({ where: { email } });
  if (!registeredUser) {
    return res.status(400).json({ message: 'Invalid fields' });
  }
  next();
};

const isThereToken = async (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }
  next();
};

const isValidToken = async (req, res, next) => {
  try {
    const decoded = jwt.verify(req.headers.authorization, JWT_SECRET);

    const user = await User.findOne({ where: { email: decoded.email } });

    if (!user) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
    req.userId = user.dataValues.id;

    next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

const isThereCategoryName = async (req, res, next) => {
  if (!req.body.name) {
    return res.status(400).json({ message: '"name" is required' });
  }
  next();
};

const isTherePostTitle = async (req, res, next) => {
  if (!req.body.title) {
    return res.status(400).json({ message: '"title" is required' });
  }
  next();
};

const isTherePostContent = async (req, res, next) => {
  if (!req.body.content) {
    return res.status(400).json({ message: '"content" is required' });
  }
  next();
};

const isTherePostCategoryIds = async (req, res, next) => {
  if (!req.body.categoryIds) {
    return res.status(400).json({ message: '"categoryIds" is required' });
  }
  next();
};

const isValidCategoryId = async (req, res, next) => {
  console.log('categories:--->', req.body.categoryIds);
  try {
    const { categoryIds } = req.body;
    const chosenCategoryId = await Category.findAll({ where: { id: categoryIds } });
    console.log('array', categoryIds);
    if (chosenCategoryId.length !== categoryIds.length) {
      return res.status(400).json({ message: '"categoryIds" not found' });
    }
    next();
  } catch (err) {
    res.status(401).json({ code: 'Unauthorized', message: err.message });
  }
};

const { Blogpost } = require('../models');

const isValidPostId = async (req, res, next) => {
  try {
      const { id } = req.params;

      const postById = await Blogpost.findOne({ where: { id } });
      
      if (!postById) {
        return res.status(404).json({ message: 'Post does not exist' });
      }

      next();
    } catch (err) {
      res.status(401).json({ code: 'Unauthorized', message: err.message });
    }
};

module.exports = {
  // authMiddleware,
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
};

// const teste = {
//   email: 'lewishamilton@gmail.com',
//   password: '123456',
//   iat: 1651553101,
//   exp: 1652157901,
// };

// console.log(Date(teste.exp));