const router = require('express').Router();
const { addUser, login } = require('../controllers').User;

router.post('/signup', addUser);
router.get('/login', login);

module.exports = router;
