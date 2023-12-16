const AuthorizedUser = require("../models/AuthorizedUsers");

const getAuthorizedUsers = async (req, res, next) => {
    let authorizedUsers;
    try {
        authorizedUsers = await AuthorizedUser.findAll();
    } catch (err) {
        return next(err);
    }
    res.json({ authorizedUsers: authorizedUsers.map(user => user.toObject({ getters: true })) });
}

module.exports = getAuthorizedUsers;