'use strict';

const User = require('../model/user'),
    Question = require('../model/question');

exports.createUser = async (req, res, next) => {
    try {
        const { email, data } = req.body;
        const questions = await Question.find({ _id: { $in: data.map(answer => answer.questionId) } });
        const userAnswers = data
            .map(answer => {
                const question = questions.find(question => question._id.toString() === answer.questionId.toString());
                const option = question.options.find(option => option._id.toString() === answer.answerId.toString());
                return { questionId: question._id, question: question.title, answer: option };
            });
        const userProfile = getProfile(userAnswers);
        const user = new User({ email, data, profile: userProfile });
        await user.save();
        const userWithData = { email, data: userAnswers, profile: userProfile };
        res.send(userWithData);
    } catch (err) {
        next(err);
    }
}

function getProfile(userAnswers) {
    // const score = Math.reduce(userAnswers.map(userAnswer => userAnswer.answer.score));
    const score = userAnswers.reduce((result, userAnswer) => result + userAnswer.answer.score, 0);
    if (score >= 8)
        return 'A';
    else if (score >= 6)
        return 'B';
    else if (score >= 4)
        return 'C';
    else if (score >= 2)
        return 'D'
    else
        return 'E';
}