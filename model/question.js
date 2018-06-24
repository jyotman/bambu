'use strict';

const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

const Question = new Schema({
    title: String,
    options: [{ _id: ObjectId, option: String, score: Number }],
    createdAt: Date
});

const QuestionModel = mongoose.model('Question', Question);

module.exports = QuestionModel;