const userController = async (req, res) => {
    const { email, password } = req.body;
  
    const token = jwt.sign({ id: user.id }, SECRET_KEY, jwtConfig);
  
    return res.status(200).json({ token });
};

module.exports = {
  userController,
};
