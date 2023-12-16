const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize("TeamRocket", 'rocket', 'a9795pH!', {
    host: "192.168.50.14",
    port: 1433,
    dialect: "mssql",
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    dialectOptions: {
        options: { encrypt: true }
    }
}); 

const AuthorizedUser = sequelize.define('AuthorizedUser', {
    authorizedUserId: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    surname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = AuthorizedUser;