const router = require('express').Router();
const { addEvent, findAllEvents, findEventByName } =
	require('../controllers').Event;

router.post('/event', addEvent);
router.get('/event/all-events', findAllEvents);
router.get('/event', findEventByName);

module.exports = router;
