const express = require('express');
const router = express.Router();
const axios = require('axios');
let globalBooks = [];

router.post('/', async (req, res) => {
  console.log(req.body.revisedUserData);
  const response = await axios.get(
    `https://openlibrary.org/search.json?title=${req.body.revisedUserData}`
  );
  // const results = response;
  const results = response.data.docs;

  const books = results.map((el) => ({
    title: el.title,
    author_name: el.author_name,
    cover_edition_key: el.cover_edition_key,
    isbn: el.isbn && Array.isArray(el.isbn) && el.isbn.length > 0 ? el.isbn[0] : 'ISBN not available',
  }));
  globalBooks = books
  res.render('results', {globalBooks})

});

router.get('/', async (req, res) =>{
  res.render('results', {globalBooks})
})
module.exports = router;


