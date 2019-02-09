const express = require("express");


// capital letter indicate this is object based blue print
const Post = require('../models/post');

const router = express.Router();

router.post("", (req, res, next) => {

  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });

  post.save().then(createdPost => {
    console.log(createdPost);

    //everything is okay but added resource = 201
    res.status(201).json({
      message: 'Post added successfully',
      postId: createdPost._id
    });
  });
});

// put new resource to override, or patch (existing)
router.put("/:id", (req, res, next) => {
  const post = new Post({
    _id: req.body._id,
    title: req.body.title,
    content: req.body.content
  })
  // takes js object and
  Post.updateOne({_id: req.params.id}, post).then(result => {
    // console.log(result);
    res.status(200).json({message: "Update successful!"});
  });
});

router.get('', (req, res, next) => {
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

router.get("/:id", (req, res, next) => {
  Post.findById(req.params.id).then(post => {
    if (post) {
      res.status(200).json(post);
    }
    else {
      res.status(404).json({message: 'Post not found!'});
    }
  });
});

// delete trquest you send id or identifier as part of url
router.delete("/:id", (req, res, next) => {
  console.log(req.params.id);

  Post.deleteOne({_id: req.params.id}).then(result => {
    console.log(result);
    res.status(200).json(
      { message: "Post deleted!"}
    );
  });


});

module.exports = router;
