const router = require('express').Router();

// Import any models you plan to use for data's routes here

// If you would like to use an authGuard middleware, import it here

async function getData() {
  try {
    const response = await axios.get('/user?ID=12345');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

// add a get / (landing page) route here
router.get('/', async (req, res) => {
  try{
  res.render('home',{ // render the handlebars page you want  
    logged_in: req.session.logged_in 
    });
  } catch (err) {
    console.log('There was an error retrieving landing page');
    res.status(500).json(err);
  }
});

// add a get /login route here
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');

  } else{
    res.render('login-signup')
  }
});

// add a get /signup route here
router.get('/signup', (req, res) => {
  console.log('Signup page attempting to be retrieved');
  try {
  } catch (err) {
    console.log('There was an error retrieving signup page');
    res.status(500).json(err);
  }
});

module.exports = router;
