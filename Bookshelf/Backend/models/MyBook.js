const mongoose = require('mongoose');

const myBookSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  bookId: { type: mongoose.Schema.Types.ObjectId, ref: 'Book' },
  status: { type: String, enum: ['Want to Read', 'Currently Reading', 'Read'], default: 'Want to Read' },
  rating: { type: Number, min: 0, max: 5 }
});

module.exports = mongoose.model('MyBook', myBookSchema);
