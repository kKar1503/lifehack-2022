const EventModel = require('./event');
const UserModel = require('./user');
const VolunteeringModel = require('./volunteering');

module.exports = {
	EventModel,
	UserModel: UserModel.UserSchema,
	UserTypeModel: UserModel.UserTypeSchema,
	VolunteeringModel,
};
