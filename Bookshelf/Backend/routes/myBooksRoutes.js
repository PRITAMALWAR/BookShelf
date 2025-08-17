const express = require('express');
const {
  getMyBooks,
  addBookToMyBooks,
  updateReadingStatus,
  updateRating
} = require('../controllers/myBooksController');

const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.use(protect);
router.get('/', getMyBooks);
router.post('/:bookId', addBookToMyBooks);
router.patch('/:bookId/status', updateReadingStatus);
router.patch('/:bookId/rating', updateRating);

module.exports = router;
