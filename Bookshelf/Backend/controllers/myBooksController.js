const MyBook = require('../models/MyBook');
const Book = require('../models/Book');

const getMyBooks = async (req, res) => {
  const books = await MyBook.find({ userId: req.user._id }).populate('bookId');
  res.json(books);
};

const addBookToMyBooks = async (req, res) => {
  const { bookId } = req.params;

  const alreadyAdded = await MyBook.findOne({ userId: req.user._id, bookId });
  if (alreadyAdded) {
    return res.status(400).json({ message: 'Book already added' });
  }

  const book = await Book.findById(bookId);
  if (!book) return res.status(404).json({ message: 'Book not found' });

  const newBook = await MyBook.create({
    userId: req.user._id,
    bookId,
    status: 'Want to Read',
    rating: 0
  });

  res.status(201).json(newBook);
};

const updateReadingStatus = async (req, res) => {
  const { bookId } = req.params;
  const { status } = req.body;

  const book = await MyBook.findOne({ userId: req.user._id, bookId });
  if (!book) return res.status(404).json({ message: 'Book not found in your list' });

  book.status = status;
  await book.save();

  res.json(book);
};

const updateRating = async (req, res) => {
  const { bookId } = req.params;
  const { rating } = req.body;

  const book = await MyBook.findOne({ userId: req.user._id, bookId });
  if (!book) return res.status(404).json({ message: 'Book not found in your list' });

  book.rating = rating;
  await book.save();

  res.json(book);
};

module.exports = {
  getMyBooks,
  addBookToMyBooks,
  updateReadingStatus,
  updateRating
};
