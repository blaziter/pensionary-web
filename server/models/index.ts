const { Sequelize, DataTypes } = require('sequelize');

export const sequelize = new Sequelize(
    process.env.DB_NAME, 
    process.env.DB_USERNAME, 
    process.env.DB_PASSWORD, {
        host: process.env.DB_HOST,
        dialect: 'mysql',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        },
    }
)

const Employee = require('./Employee');
const User = require('./User');

sequelize.sync({force: true}).then(() => {
    Employee.create({
        firstName: "Petr",
        lastName: "Tran",
        role: "Sestricka",
        availability: false
    });

    User.create({
        username: "admin",
        password: "admin"
    });
}).catch((error: any) => {
    console.error(error);
});

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error: any) => {
    console.error('Unable to connect to the database: ', error);
});