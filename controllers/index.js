const router = require('express').Router();

// Import of all the routes from controllers 
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
// const pageOneRoutes = require('./pageOneRoutes');

// Router connection
router.use('/', homeRoutes);
router.use('/api', apiRoutes);
// router.use('/pageOneRoutes', pageOneRoutes);

module.exports = router;
