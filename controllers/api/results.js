const express = require('express');
const router = express.Router();
const { Books } = require('../../models');

router.post('/', (req, res) => {
    const { title, author, cover } = req.body;
  
    res.render('results', { title, author, cover });
  });
  
  module.exports = router;