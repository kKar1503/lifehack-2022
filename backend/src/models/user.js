import { array, object, string } from 'yup';
import VolunteeringSchema from './volunteering';

const UserPermissionSchema = object({
	type: string().required(),
});

export const UserTypeSchema = object({
	type: string().required(),
	permissions: array().of(UserPermissionSchema),
});

export const UserSchema = object({
	username: string().required(),
	userType: UserTypeSchema.required(),
	volunteerings: array().of(VolunteeringSchema),
});
