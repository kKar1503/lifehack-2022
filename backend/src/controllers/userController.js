const { userCollection } = require('../database');
const { responses, object } = require('../utils');
const { NotFoundError } = require('../errors');
const { UserModel } = require('../models');

module.exports = {
	// CREATE

	addUser: (req, res, next) => {
		const user = req.user;
		console.log(user);
		// userCollection
		// 	.doc(user.id)
		// 	.then(() =>
		// 		res.json(responses.success200(req, { message: 'User added!' })),
		// 	)
		// 	.catch(error => {
		// 		next(error);
		// 	});
	},

	// READ

	getUserById: (req, res, next) => {
		const user = req.user;
		userCollection
			.doc(user.id)
			.get()
			.then(doc => {
				if (!doc.data()) return next(new NotFoundError('User'));
				res.json(
					responses.success200(req, {
						...doc.data(),
						id: doc.id,
					}),
				);
			})
			.catch(error => {
				return next(error);
			});
	},

	// UPDATE

	// updatePassword: (req, res, next) => {
	// 	const { username, password, newPassword } = req.body;
	// 	userCollection
	// 		.where('username', '==', username)
	// 		.where('password', '==', password)
	// 		.get()
	// 		.then(snapshot => {
	// 			if (snapshot.empty) return next(new NotFoundError('User'));
	// 			snapshot.forEach(doc => {
	// 				userCollection
	// 					.doc(doc.id)
	// 					.set({ password: newPassword })
	// 					.then(() =>
	// 						res.json(
	// 							responses.success200(req, {
	// 								message: 'Password updated!',
	// 							}),
	// 						),
	// 					)
	// 					.catch(error => {
	// 						next(error);
	// 					});
	// 			});
	// 		})
	// 		.catch(error => {
	// 			next(error);
	// 		});
	// },
};
