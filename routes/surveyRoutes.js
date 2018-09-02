const mongoose = require('mongoose');

const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

const Survey = mongoose.model('surveys');


module.exports = app => {

	app.get('/api/surveys/thanks', (req, res) => {
		res.send('Thanks for voting!');
	});

	app.post(
		'/api/surveys',
		requireLogin, requireCredits,
		async (req, res) => {

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

			// send email
			const mailer = new Mailer(survey, surveyTemplate(survey));

			try {

				// async function
				await mailer.send();

				// save survey
				await survey.save();

				req.user.credits -= 1;
				const user = await req.user.save();

				res.send(user);
			} catch (err) {
				res.status(422).send(err);
			}
	});

};

// app.get('/', (req, res) => {
// 	res.send({
// 		hi: 'there'
// 	});
// });