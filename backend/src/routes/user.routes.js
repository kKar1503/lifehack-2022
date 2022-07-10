const router = require('express').Router();
const { addUser, getUserById } = require('../controllers').User;
const { authentication } = require('../middlewares');

router.use(authentication);

router.post('/signup', addUser);
router.get('/user', getUserById);

module.exports = router;
