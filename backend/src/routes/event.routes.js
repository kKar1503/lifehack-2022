const router = require('express').Router();
const { addEvent, findAllEvents, findEventById } =
	require('../controllers').Event;

router.post('/event', addEvent);
router.get('/event/all-events', findAllEvents);
router.get('/event', findEventById);

module.exports = router;
