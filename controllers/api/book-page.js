const express = require('express');
const router = express.Router();
const axios = require('axios');
const { Books } = require('../../models');
const { Posts } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const isbn = parseInt(req.body.isbn);
    const response = await axios.get(
      `https://openlibrary.org/search.json?q=${isbn}`
    );
    const results = response.data.docs;

    const bookInfo = results.map((el) => ({
      title: el.title,
      author_name: el.author_name,
      cover_edition_key: el.cover_edition_key,
      isbn: el.isbn,
      rating: el.rating_average,
    }));
    res.render('book-page.handlebars', { bookInfo });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', (req, res) => {
  console.log(req.body);
  Posts.update(
    {
      text: req.body.comment,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((updatedPost) => {
      res.json(updatedPost);
    })
    .catch((err) => res.json(err));
});

module.exports = router;
