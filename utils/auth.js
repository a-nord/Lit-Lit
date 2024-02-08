

// route guard for api routes/actions that require a logged in user
const withAuth = (req, res, next) => {
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    next();
  }
};

module.exports =  withAuth ;
