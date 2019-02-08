const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  title: { type:String, required: true },
  content: { type: String, required: true }

});

//turn definition in to model

module.exports = mongoose.model('Post', postSchema);

