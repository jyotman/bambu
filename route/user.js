'use strict';

const userController = require('../controller/user');
const router = require('express').Router();

router.post('/', userController.createUser);

module.exports = router