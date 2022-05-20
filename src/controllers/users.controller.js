const userCtrl = {};
const bcrypt = require("bcrypt");
const { User } = require('../models/User');

userCtrl.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  }
  catch (err) {
    res.status(400).json({
      error: err
    });
  }
};

userCtrl.createUser = async (req, res) => {
  try {

    const user = await User.findOne({ email: req.body.email });
    if (user)
      return res
        .status(409)
        .send({ message: "User with given email already Exist!" });

    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({ ...req.body, password: hashPassword });

    await newUser.save();

    res.status(201).send({ message: "User created successfully" });
  } catch (e) {
    res.json(e.errmsg);
  };
}



userCtrl.deleteUser = async (req, res) => {
  const { id } = req.params;
  await User.findByIdAndDelete(id);
  res.json('User deleted');
}

module.exports = userCtrl;