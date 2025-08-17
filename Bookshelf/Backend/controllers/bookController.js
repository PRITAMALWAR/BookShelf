const Book = require('../models/Book');

// Controller to return all books
const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch books' });
  }
};

module.exports = { getBooks }; // ✅ Export as an object
