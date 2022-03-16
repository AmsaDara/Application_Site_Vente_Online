const jwt = require("jsonwebtoken");
const { token } = require("morgan");
User = require("../models/user");

const verifyToken = (req, res, next) => {
  let token =  req.headers["token"]
  if (token) {
    jwt.verify(token, process.env.API_SECRET, function (err, decode) {
      if (err) req.user = undefined;
      User.findOne({
          _id: decode.id
        })
        .exec((err, user) => {
          if (err) {
            res.status(500)
              .send({
                message: err
              });
          } else {
            req.user = user;
            next();
          }
        })
    });
  } else {
    req.user = undefined;
    next();
  }
};
module.exports = verifyToken;