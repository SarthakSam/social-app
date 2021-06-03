const { Schema, model } = require('mongoose'),

const UserSchema = new Schema({
    username: { type: String, required: 'Username is mandatory'},
    email: { type: String, required: 'Email is mandatory', unique: 'A user with this email aready exists' },
    profilePic: { type: String },
    backgroundPic: { type: String},
    emailVerified: { type: Boolean, default: false },
    friends: [ { type: Schema.Types.objectId, ref: 'User' } ]
});

const User = model('user', UserSchema);

module.exports = { User };