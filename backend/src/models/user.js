const { array, object, string } = require('yup');
const VolunteeringSchema = require('./volunteering');

const UserPermissionSchema = object({
	type: string().required(),
});

const UserTypeSchema = object({
	type: string().required(),
	permissions: array().of(UserPermissionSchema),
});

const UserSchema = object({
	id: string().required(),
	userType: UserTypeSchema.required(),
	volunteerings: array().of(VolunteeringSchema),
});

module.exports = {
	UserTypeSchema,
	UserSchema,
};
