const UserControllers = require('./userController');
const EventControllers = require('./eventController');

module.exports = {
	User: { ...UserControllers },
	Event: { ...EventControllers },
};
