const router = require('express').Router();
const saveBooksRoutes = require('./saveBook-routes')

const userRoutes = require('./userRoutes');
const resultsRoute = require('./results')

// Connect the routes to the router here
router.use('/users', userRoutes);
router.use('/saveBook', saveBooksRoutes)
router.use('/results', resultsRoute)
module.exports = router;
