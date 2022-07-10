const router = require('express').Router();
const { addUser, getUserById } = require('../controllers').User;
const { authentication } = require('../middlewares');

router.post('/signup', authentication, addUser);
router.get('/user', authentication, getUserById);

module.exports = router;
