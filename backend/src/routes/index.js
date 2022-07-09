const router = require('express').Router();
const { PROJECT_NAME } = require('../constants');

// Routers Imports

// Middlewares
const { accessLogger } = require('../middlewares');

router.use(accessLogger);

// Routes
router.get('/', (req, res) => {
	res.status(200).send(`${PROJECT_NAME}'s backend API.`);
});

module.exports = router;
