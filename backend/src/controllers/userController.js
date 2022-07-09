const { userCollection } = require('../database');
const { responses } = require('../utils');
const { NotFoundError } = require('../errors');

module.exports = {
	// CREATE

	addUser: (req, res, next) => {
		const data = req.body;
		userCollection
			.add(data)
			.then(() =>
				res.json(responses.success200(req, { message: 'User added!' })),
			)
			.catch(error => {
				next(error);
			});
	},

	// READ

	login: (req, res, next) => {
		const { username, password } = req.body;
		userCollection
			.where('username', '==', username)
			.where('password', '==', password)
			.get()
			.then(snapshot => {
				if (snapshot.empty) return next(new NotFoundError('User'));
				snapshot.forEach(doc => {
					res.json(responses.success200(req, doc.data()));
				});
			})
			.catch(error => {
				return next(error);
			});
	},

	// UPDATE

	updatePassword: (req, res, next) => {
		const { username, password, newPassword } = req.body;
		userCollection
			.where('username', '==', username)
			.where('password', '==', password)
			.get()
			.then(snapshot => {
				if (snapshot.empty) return next(new NotFoundError('User'));
				snapshot.forEach(doc => {
					userCollection
						.doc(doc.id)
						.set({ password: newPassword })
						.then(() =>
							res.json(
								responses.success200(req, {
									message: 'Password updated!',
								}),
							),
						)
						.catch(error => {
							next(error);
						});
				});
			})
			.catch(error => {
				next(error);
			});
	},
};
