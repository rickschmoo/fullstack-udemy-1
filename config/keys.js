// keys.js - don't commit this
if (process.env.NODE_ENV === 'production') {

	// production - on heroku
	module.exports = require('./prod');

} else {
	// dev - on local
	module.exports = require(./dev);
}
