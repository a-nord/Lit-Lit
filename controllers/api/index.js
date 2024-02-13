const router = require('express').Router();
const saveBooksRoutes = require('./saveBook-routes')
const userRoutes = require('./userRoutes');
const bookPageRoutes = require('./book-page');
const favoritesRoutes = require('./favorites');


// Connect the routes to the router here
router.use('/users', userRoutes);
router.use('/saveBook', saveBooksRoutes);
router.use('/book-page', bookPageRoutes);
router.use('/favorites', favoritesRoutes);
module.exports = router;
