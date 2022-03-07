require("dotenv").config();
const express = require("express"),
  app = express(),
  mongoose = require("mongoose"),
  userRoutes = require("./routes/user.route");
  articleRoutes = require("./routes/article.route");
const port = process.env.PORT || 3000;
const host = process.env.HOST || "http://localhost";

//Connect to database
const mongoUrl = process.env.MONGO_URL;

try {
  mongoose.connect(mongoUrl, () => {
    console.log(
      "Votre base de donnée mongo instance est connecter avec succés"
    );
  });
} catch (error) {
  console.log(
    "Impossible de te connecter à votre base de donnée mongo instance",
    error
  );
}

// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(
  express.urlencoded({
    extended: true,
  })
);

//using user route
app.use(userRoutes);
app.use(articleRoutes);

//setup server to listen on port 3000
app.get((req, res) => {
  res.json({ message: "404 erreur not found" });
});

app.listen(port, () => {
  console.log(`Server listening on ${host}:${port}`);
});
