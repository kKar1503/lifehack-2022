const { array, object, string } = require('yup');

const UserSchema = object({
	id: string().required(),
	firstName: string().required(),
	lastName: string().required(),
	userType: string().required(),
	volunteerings: array().of(string()),
});

module.exports = {
	UserSchema,
};
