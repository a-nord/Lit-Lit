const router = require('express').Router();

// Import all of the routes from /api/ here
const userRoutes = require('./userRoutes');
const dataOneRoute = require('./dataOneRoute');

// Connect the routes to the router here
router.use('/users', userRoutes);
router.use('/dataOneRoute', dataOneRoute);

module.exports = router;
