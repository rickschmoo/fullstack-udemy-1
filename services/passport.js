const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

// define serializeUser()
// convert mongoose model instance into a "token/cookie"
passport.serializeUser((user, done) => {
	// note user.id is the mongo record id
	// use this as can map to multiple specific
	// OAuth services
	done(null, user.id);
});

// define deserializeUser()
// convert "token/cookie" into a mongoose user model instance
passport.deserializeUser((id, done) => {
	User.findById(id)
		.then(user => {
			done(null, user);
		});
});

passport.use(new GoogleStrategy({
	clientID: keys.googleClientID,
	clientSecret: keys.googleClientSecret,
	callbackURL: '/auth/google/callback',
	proxy: true
	}, 
	async (accessToken, refreshToken, profile, done) => {
		
		// console.log('access token: ', accessToken);
		// console.log('refresh token: ', refreshToken);
		// console.log('profile : ', profile);
		
		const existingUser = await User.findOne({
			googleID: profile.id
		});
		if (existingUser) {
			// user already exists
			done(null, existingUser);
		} else {
			// need to create new user
			const user = await new User({
				googleID: profile.id
			}).save();
			done(null,user);
		}

	}
));

