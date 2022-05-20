const authCtrl = {};
const { User } = require("../models/User");
const bcrypt = require("bcrypt");


authCtrl.login = async (req, res) => {
  try {

    const user = await User.findOne({ email: req.body.email });
    if (!user)
      return res.status(401).send({ message: "Invalid Email or Password" });

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword)
      return res.status(401).send({ message: "Invalid Email or Password" });

    const token = user.generateAuthToken();
    res.status(200).send({ data: token, message: "logged in successfully" });

  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};


module.exports = authCtrl;