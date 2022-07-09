const router = require('express').Router();
const { PROJECT_NAME } = require('../constants');

// Routers Imports
const userRouter = require('./user.routes');
const eventRouter = require('./event.routes');

// Middlewares
const { accessLogger } = require('../middlewares');

router.use(accessLogger);
router.use(userRouter);
router.use(eventRouter);

// Routes
router.get('/', (req, res) => {
	res.status(200).send(`${PROJECT_NAME}'s backend API.`);
});

module.exports = router;
