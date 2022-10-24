import { sequelize } from "./index";
const { DataTypes } = require('sequelize');

module.exports = sequelize.define("users", {
    username: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    }
});