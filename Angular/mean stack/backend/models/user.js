const mongoose = require('mongoose');
// a plugin that will simply add an extra hook that checks your datya before it saves
// it to the db
const uniqueVal = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true},
  password: { type: String, required: true }

});

userSchema.plugin(uniqueVal);

//turn definition in to model

module.exports = mongoose.model('User', userSchema);

