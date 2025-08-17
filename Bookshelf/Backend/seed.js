const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Book = require('./models/Book');
const booksData = require('./books.json');

dotenv.config();

const seedBooks = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');

    await Book.deleteMany(); 
    const inserted = await Book.insertMany(booksData.books);

    console.log(`${inserted.length} books inserted successfully.`);
    process.exit();
  } catch (error) {
    console.error('Seeding failed:', error);
    process.exit(1);
  }
};

seedBooks();
