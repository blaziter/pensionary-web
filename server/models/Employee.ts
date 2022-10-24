import { sequelize } from ".";
const { DataTypes } = require('sequelize');

const Employee = sequelize.define("employees", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
})
 