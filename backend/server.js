require("dotenv").config();

const express = require("express");
const scoreRoutes = require("./routes/scores");
const mongoose = require("mongoose");

// express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

// route
app.use('/api/scores', scoreRoutes);

// connect to mongodb
try {
  mongoose.connect(process.env.MONGO_URI)
    .then(() => {
      // listen for requests
      app.listen(process.env.PORT, () => {
        console.log("connected to db & listening on port 3000");
      });
    })
    .catch((err) => {
      console.log(err);
    });
} catch (err) {
  console.log(err);
}


