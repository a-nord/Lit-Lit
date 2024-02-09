const router = require('express').Router();
const saveBooksRoutes = require('./saveBook-routes')

const userRoutes = require('./userRoutes');

// Connect the routes to the router here
router.use('/users', userRoutes);
router.use('/saveBook', saveBooksRoutes)

module.exports = router;
