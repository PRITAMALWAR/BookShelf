const express = require('express');
const { getBooks } = require('../controllers/bookController'); // ✅ Import the function properly

const router = express.Router();

// Public route to fetch all books
router.get('/', getBooks); // ✅ This must be a function

module.exports = router;
