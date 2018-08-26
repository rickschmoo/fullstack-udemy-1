const mongoose = require('mongoose');

const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');


const Survey = mongoose.model('surveys');


module.exports = app => {
	app.post(
		'/api/surveys',
		requireLogin, requireCredits,
		(req, res) => {

			// req should contain title, subject, body, recipients
			const { title, subject, body, recipients } = req.body;


			// create new survey instance
			// if map messed up -> 124
			const survey = new Survey({
				title: title,
				subject: subject,
				body: body,
				recipients: recipients.split(',')
					.map(email => { return ({ email: email.trim() }) }),
				_user: req.user.id,
				dateSent: Date.now()
			});

	});

};

// app.get('/', (req, res) => {
// 	res.send({
// 		hi: 'there'
// 	});
// });