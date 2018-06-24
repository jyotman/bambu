'use strict';

const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

const User = new Schema({
    email: String,
    profile: String,
    data: [{ questionId: { type: ObjectId, ref: 'Question' }, answerId: ObjectId }],
    createdAt: Date
});

User.index({ email: 1 }, { unique: true });

const UserModel = mongoose.model('User', User);

module.exports = UserModel;