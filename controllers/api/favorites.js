const express = require('express');
const router = express.Router();
const axios = require('axios');
const { Books } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const bookCover = await Books.cover();
    res.status(200).json(userData);

    const cover = await axios.get(
      `https://covers.openlibrary.org/b/olid/${bookCover}-S.jpg`
    );

    res.render('carousel-items.handlebars', {Books: cover})
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;