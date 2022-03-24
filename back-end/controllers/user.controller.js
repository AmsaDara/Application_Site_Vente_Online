var jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt");
var User = require("../models/user");

exports.signup = (req, res) => {
  const user = new User({
    fullName: req.body.fullName,
    email: req.body.email,
    role: req.body.role,
    password: bcrypt.hashSync(req.body.password, 8)
  });

  user.save((err, user) => {
    if (err) {
      res.status(500)
        .json({
          message: err
        });
      return;
    } else {
      res.status(200)
        .json({
          message: "User Registered successfully"
        })
    }
  });
};

exports.signin = (req, res) => {
  User.findOne({
      email: req.body.email
    })
    .exec((err, user) => {
      if (err) {
        res.status(500)
          .json({
            message: err
          });
        return;
      }
      if (!user) {
        return res.status(404)
          .json({
            message: "User Not found."
          });
      }

      //comparing passwords
      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );
      // checking if password was valid and json response accordingly
      if (!passwordIsValid) {
        return res.status(401)
          .json({
            accessToken: null,
            message: "Invalid Password!"
          });
      }
      //signing token with user id
      var token = jwt.sign({
        id: user.id
      }, process.env.API_SECRET, {
        expiresIn: 86400
      });

      //responding to client request with user profile success message and  access token .
      res.status(200)
        .json({
          user: {
            id: user._id,
            email: user.email,
            fullName: user.fullName,
          },
          message: "Login successfull",
          accessToken: token,
        });
    });
};
