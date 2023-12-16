const express = require("express");
const bodyParser = require("body-parser");
const { Sequelize } = require('sequelize');

const app = express();

const authorizedUsersRoute = require('./routes/AuthorizedUsersRoute');

app.use(bodyParser.json);

app.listen(5000);

app.use('/authorizedUsers', authorizedUsersRoute);

const sequelize = new Sequelize('TeamRocket', 'rocket', 'a9795pH!', {
    host: '192.168.50.14',
    dialect: 'mssql'
});

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}