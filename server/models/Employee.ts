import { sequelize } from "./index";
const { DataTypes } = require('sequelize');

module.exports = sequelize.define("employees", {
    firstName: {
        type: DataTypes.STRING
    },
    lastName: {
        type: DataTypes.STRING
    },
    role: {
        type: DataTypes.STRING
    },
    availability: {
        type: DataTypes.BOOLEAN
    }
});