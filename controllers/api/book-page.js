const express = require('express');
const router = express.Router();
const axios = require('axios');
const { Books } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const isbn = await Books.isbn();
    res.status(200).json(userData);

    const cover = await axios.get(
      `http://openlibrary.org/api/volumes/brief/isbn/${isbn}.json`
    );

    res.render('book-page.handlebars', { Books: cover });
  } catch (err) {
    res.status(500).json(err);
  }
});
