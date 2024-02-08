const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../../models/Users');

// import any models you plan to use for this data's routes here

// /api/
// add a post user API route here
router.post('/', async (req, res) => {
  try {
    console.log('User attempting to be added');
  } catch (err) {
    console.log('There was an error creating user');
    console.log(err);
    res.status(500).json(err);
  }
});

// /api/login
// add a post login API route here
router.post('/login', async (req, res) => {
  try {
    console.log('User attempting to log in');
  } catch (err) {
    console.log('There was an error logging in');
    console.log(err);
    res.status(500).json(err);
  }
});

// /api/logout
// add a post logout API route here
router.post('/logout', (req, res) => {});


router.post('/signup', async (req, res) => {
  try {
    const newUser = req.body;
    newUser.password = await bcrypt.hash(req.body.password, 10);
    const userData = await User.create(newUser);
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});


module.exports = router;
