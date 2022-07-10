const router = require('express').Router();
const { addUser, getUserById, addVolunteering } =
	require('../controllers').User;
const { authentication } = require('../middlewares');

router.post('/signup', authentication, addUser);
router.get('/user', authentication, getUserById);
router.put('/user', authentication, addVolunteering);

module.exports = router;
