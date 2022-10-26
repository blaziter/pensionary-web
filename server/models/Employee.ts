import { sequelize } from "./index";
const { DataTypes } = require('sequelize');

module.exports = sequelize.define("employees", {
    employeeId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
    },
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