const bodyParser = require("body-parser");
const express = require("express");
const app = express();

const mongoose = require("mongoose");

const dataRoutes = require("./routes/players");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH,PUT,DELETE");
  next();
});

app.use(bodyParser.json());

app.use(dataRoutes);

mongoose
  .connect(
    "mongodb+srv://practice2:practice2@practice2.0c70v.mongodb.net/nodeCert?retryWrites=true&w=majority"
  )
  .then((result) => {
    app.listen(process.env.PORT || 5000);
    console.log("Connected!");
  })
  .catch((err) => {
    console.log(err);
  });
