const userModel = require("../DBmodels/AuthModel");
const { sendResponse } = require("../helpers/helpers");
const bcrypt = require("bcrypt");
let jwt = require("jsonwebtoken");

const AuthController = {
  signup: async (req, res) => {
    try {
      let { userName, password, email, fullName } = req.body;
      let obj = { userName, password, email, fullName };
      let errArr = [];

      if (!obj.userName) {
        errArr.push("Required User Name");
      }
      if (!obj.password) {
        errArr.push("Required Password");
      }

      if (errArr.length > 0) {
        res.status(400).send(sendResponse(false, "Validation Error !", errArr));
      }

      let userExist = await userModel.findOne({ userName: obj.userName });

      if (userExist) {
        res
          .status(200)
          .send(sendResponse(false, "User already exists with this UserName"));
        return;
      }

      obj.password = await bcrypt.hash(obj.password, 10);

      let User = new userModel(obj);
      let result = await User.save();

      if (result) {
        res
          .status(200)
          .send(sendResponse(true, "User Created Successfully", result));
      }
    } catch (error) {
      res.status(500).send(sendResponse(false, "Internal Server Error", error));
    }
  },

  login: async (req, res) => {
    try {
      let { userName, password } = req.body;
      let obj = { userName, password };
      let existingUser = await userModel.findOne({ userName: obj.userName });

      if (existingUser) {
        let correctPassword = await bcrypt.compare(
          obj.password,
          existingUser.password
        );

        if (correctPassword) {
          let token = jwt.sign({ ...existingUser }, process.env.SECRET_KEY);

          res.send(
            sendResponse(true, "login successfully", {
              token: token,
              user: existingUser,
            })
          );
        } else {
          res.send(sendResponse(false, "Password Not Matched"));
        }
      } else {
        res.send(sendResponse(false, "User Not Found with this User Name"));
      }
    } catch (e) {}
  },
  protected: () => {},
};

module.exports = AuthController;
