var express = require("express"),
  router = express.Router(),
  verifyToken = require('../middlewares/userJWT.js'),
  {
    signup,signin
  } = require("../controllers/user.controller.js");
  const articleServices= require('../controllers/article.controller');
router.post("/register", signup);

router.post("/login", signin);

router.get("/hiddencontent", verifyToken, function (req, res) {
  console.log(req.user);
  if (!req.user) {
    res.status(403).json({
        message: "Invalid JWT token"
      });
  }
  if (req.user) {
    let articles= articleServices.getAllArticles();
    res.status(200)
      .json({articles});
  } else if(req.user.role === "normal") {
    res.status(403)
      .json({
        message:"authorised access"
      });
  }
});

module.exports = router;