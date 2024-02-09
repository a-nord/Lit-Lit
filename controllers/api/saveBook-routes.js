const express = require('express');
const router = express.Router();
const { Books } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const { title, author } = req.body;
    // Create new Book
    const savedBook = await Books.create({ title, author, cover });

    res.status(201).json({ message: 'Book saved successfully', savedBook });
  } catch (error) {
    console.error('Error saving book:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
