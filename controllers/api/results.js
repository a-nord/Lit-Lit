const express = require('express');
const router = express.Router();
const axios = require('axios');
const { Books } = require('../../models');

router.post('/', async (req, res) => {
  //console.log(req.body);
  const response = await axios.get(
    `https://openlibrary.org/search.json?title=${req.body}`
  );
  // const results = response;
  console.log(response.data.docs[0].key);
});

// router.post('/', (req, res) => {
//   const { title, author, cover } = req.body;

//   res.render('results', { title, author, cover });
// });

module.exports = router;
