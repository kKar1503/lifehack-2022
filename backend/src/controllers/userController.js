const { userCollection, arrayUnion } = require('../database');
const { responses } = require('../utils');
const { NotFoundError } = require('../errors');
const { UserModel } = require('../models');

module.exports = {
	// CREATE

	addUser: (req, res, next) => {
		const user = req.user;
		const { firstName, lastName } = req.body;
		userCollection
			.doc(user.user_id)
			.set({
				firstName,
				lastName,
				userType: 'member',
			})
			.then(() =>
				res.json(responses.success201({ message: 'User added!' })),
			)
			.catch(error => {
				next(error);
			});
	},

	// READ

	getUserById: (req, res, next) => {
		const user = req.user;
		userCollection
			.doc(user.user_id)
			.get()
			.then(doc => {
				if (!doc.data()) return next(new NotFoundError('User'));
				res.json(
					responses.success200({
						...doc.data(),
						id: doc.id,
						email: user.email,
					}),
				);
			})
			.catch(error => {
				return next(error);
			});
	},

	// UPDATE

	addVolunteering: (req, res, next) => {
		const { volunteer } = req.body;
		const user = req.user;
		userCollection
			.doc(user.user_id)
			.update({ volunteerings: arrayUnion(volunteer) })
			.then(() => {
				res.json(responses.success200({ message: 'User updated!' }));
			})
			.catch(e => console.log(e));
	},
};
