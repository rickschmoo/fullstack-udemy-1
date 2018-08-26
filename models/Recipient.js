const mongoose = require('mongoose');

// const Schema = mongoose.Schema;
const { Schema } = mongoose;

const recipientSchema = new  Schema({
	email: String,
	responded: { type: Boolean, default: false } 
});

// this is a sub doc collection to include in Survey 
module.exports = recipientSchema;
