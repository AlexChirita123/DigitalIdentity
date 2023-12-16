const express = require('express');

const authorizedUsersController = require('../controllers/AuthorizedUsersController');

const router = express.Router();

router.get('/AuthorizedUser', authorizedUsersController.getAuthorizedUsers);

module.exports = router;
