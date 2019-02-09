// will hold express app

const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const postsRoutes = require("./routes/posts");

const app = express();

// app.use((req, res, next) => {
//   console.log('First middleware');
//   next();
// });

mongoose.connect("mongodb+srv://max:9Wqd3GYssgsXL8D@cluster0-r1h12.mongodb.net/node-angular?retryWrites=true")
.then(() => {
  console.log('Connection Succeed!');
})
.catch(() => {
  console.log('Connection Failed!');
});

//return valid express middleware for parsing json data.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));

app.use((req, res, next) => {
  //manipulate respons
  res.setHeader('Access-Control-Allow-Origin', "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With, Content-Type, Accept");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS");
  next();
});

app.use("/api/posts", postsRoutes);

module.exports = app;
