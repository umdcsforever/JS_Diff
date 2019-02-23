const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  title: { type:String, required: true },
  content: { type: String, required: true },
  imagePath: { type: String, required: true },
  // ref -> allows to define to which model this ID will belong
  creator: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }

});

//turn definition in to model

module.exports = mongoose.model('Post', postSchema);

