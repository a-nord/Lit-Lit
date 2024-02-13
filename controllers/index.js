const router = require('express').Router();

// Import of all the routes from controllers 
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const resultsRoute = require('./results')


// Router connection
router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/results', resultsRoute)


module.exports = router;
