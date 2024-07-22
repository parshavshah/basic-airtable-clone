const { User } = require("../models/index");
const { loginSchema, registerSchema } = require("../schema/user.schema");
const jwt = require('jsonwebtoken');

const registerUser = async (req, res) => {
  const { error } = registerSchema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const { firstName, lastName, email, password } = req.body;

  try {
    const user = await User.create({ firstName, lastName, email, password });
    res.status(201).send(user);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const loginUser = async (req, res) => {
  const { error } = loginSchema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(400).send("Invalid email or password.");

    const validPassword = await user.validPassword(password);
    if (!validPassword)
      return res.status(400).send("Invalid email or password.");

    const token = jwt.sign({ id: user.id, role: user.role }, "jwtPrivateKey", {
      expiresIn: "1h",
    });
    res.send({ token });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  registerUser,
  loginUser,
};
