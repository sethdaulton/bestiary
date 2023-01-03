const router = require('express').Router();

const monsterRoutes = require('./monster-routes.js');
const userRoutes = require('./user-routes.js');

router.use('/monster', monsterRoutes);
router.use('/user', userRoutes);

module.exports = router;