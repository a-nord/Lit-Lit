const express = require('express');
const router = express.Router();
const axios = require('axios');
const { Books } = require('../../models');

router.post('/', async (req, res) => {
  console.log(req.body.revisedUserData);
  const response = await axios.get(
    `https://openlibrary.org/search.json?title=${req.body.revisedUserData}`
  );
  // const results = response;
  const results = response.data.docs;

  const filteredArray = results.map((el) => ({
    title: el.title,
    author_name: el.author_name,
    cover_edition_key: el.cover_edition_key,
  }));

  console.log(filteredArray);
});

module.exports = router;
