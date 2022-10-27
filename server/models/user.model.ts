import { sequelize } from "./index.model";
const { DataTypes } = require('sequelize');

module.exports = sequelize.define("users", {
    userId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
    },
    username: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    }
});