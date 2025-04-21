import { DataTypes } from "sequelize";
import connection from "../config/sequelize.js";

// Modelo de la tabla FAN_FAVORITES_PROJECT
const Fan_favorites_project = connection.define("fan_favorites_project", {
    fan_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        unique: true,
    },
    project_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        unique: true,
    },
})

export default Fan_favorites_project;