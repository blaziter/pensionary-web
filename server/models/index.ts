const { Sequelize } = require('sequelize');

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

sequelize.sync().then(() => {
    /*
    Employee.create({
        firstName: "Petr",
        lastName: "Tran",
        role: "Sestricka",
        availability: false
    });

    Employee.create({
        firstName: "Petr1",
        lastName: "Tran1",
        role: "Sestricka1",
        availability: true
    });

    User.create({
        username: "admin",
        password: "admin"
    });
    */
})

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
})