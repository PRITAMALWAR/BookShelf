const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  coverImage: String,
  availability: Boolean
});

module.exports = mongoose.model('Book', bookSchema);
