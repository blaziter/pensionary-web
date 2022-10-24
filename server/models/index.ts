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

sequelize.sync({force: true}).then(() => {
    Employee.create({
        name: "Pepík"
    })

}).catch((error: any) => {
    console.error(error);
});

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error: any) => {
    console.error('Unable to connect to the database: ', error);
 });