// will hold express app

const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// capital letter indicate this is object based blue print
const Post = require('./models/post');

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
  res.setHeader("Acess-Control-Allow-Methods",
  "GET, POST, PATCH, DELETE, OPTIONS");
  next();
});

app.post("/api/posts", (req, res, next) => {

  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });

  post.save();

  console.log(post);
  //everything is okay but added resource = 201
  res.status(201).json({
    message: 'Post added successfully'
  });
});

app.get('/api/posts', (req, res, next) => {
  // res.send('Hello from express!');

  // fetch data
  // find return all entry or can be narrowed down to certain topic
  Post.find().then(documents => {

    // fetching is asynchronous so needs to wait for it to finish
    res.status(200).json({
      message: 'Posts fetched succesfully',
      posts: documents
    });
    console.log(documents);
  });


});

// delete trquest you send id or identifier as part of url
app.delete("/api/posts/:id", (req, res, next) => {
  console.log(req.params.id);
  res.status(200).json(
    { message: "Post deleted!"}
  );
});

module.exports = app;
