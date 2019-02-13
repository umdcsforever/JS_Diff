const express = require("express");
const multer = require('multer');

// capital letter indicate this is object based blue print
const Post = require('../models/post');

const router = express.Router();

const MIME_TYPE_MAP = {
  'image/png' : 'png',
  'image/jpeg': 'jpg',
  'image/jpg': 'jpg'
};
// define where multer should put files which it detrcts in the incoming request
const storage = multer.diskStorage({
  // callback to pass back where you should store the file
  destination: (req, file, cb) => {
    // this can return nothing, undefined, null
    const isValid = MIME_TYPE_MAP[file.mimetype];
    let error = new Error('Invalid mime type');
    if (isValid) {
      error = null;
    }
    cb(error, 'backend/images')
  },
  filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(' ').join('-');
    const ext = MIME_TYPE_MAP[file.mimetype];
    cb(null, name + "-" + Date.now() + '.' + ext);
  }
});

// multer(storage).single("image") = expecting a single file and pass image as an arg
// as string, try to extract a single file from the incoming rqe and it tries to find
// it on an image prop in the req body
router.post("", multer({storage: storage}).single("image"), (req, res, next) => {

  // http + :// host  == domain
  const url = req.protocol + "://" + req.get("host");

  const post = new Post({
    title: req.body.title,
    content: req.body.content,
    imagePath: url + "/images/" + req.file.filename
  });

  post.save().then(createdPost => {
    // console.log(createdPost);

    //everything is okay but added resource = 201
    res.status(201).json({
      message: 'Post added successfully',
      postId: {
        // next gen JS feature where you create a new object and then
        // use spread operator to copy all props of another object and simply
        // add or overwrite extra properties.
        ...createdPost,
        id: createdPost._id
      }
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
